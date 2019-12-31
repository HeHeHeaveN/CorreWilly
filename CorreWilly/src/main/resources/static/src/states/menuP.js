var puntos1=0;
var puntos2=0;

var puntuacion1;
var puntuacion2;

var primeraPartida;

var idJugador1 = -1;

var aux;

var creado=false;

class menuP extends Phaser.Scene {
    constructor() {
        super("menuPScene");
    }

    preload() {
        // fondo
        this.load.image('menu', 'assets/Menu_inicio.png');
    }

    create() {    	
    	aux=false;
    	
    	//musica
    	if(!creado){
    		music = this.sound.add('theme');
            game.volume = 0;
            music.play();
            music.loop = true;
    	}
    	
        // Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(1.67);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        //Textos interactuables 
        this.jugar=this.add.text(1300,900,"Jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('lobbyScene'));
        this.comoJugar=this.add.text(1050,1100,"Como jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('controlesScene'));
        this.creditos=this.add.text(1200,1300,"Creditos",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('creditosScene'));
        
        this.jugar.on('pointerout',()=>this.fueraJ());
        this.jugar.on('pointerover',()=>this.dentroJ());
        this.comoJugar.on('pointerout',()=>this.fueraCJ());
        this.comoJugar.on('pointerover',()=>this.dentroCJ());
        this.creditos.on('pointerout',()=>this.fueraC());
        this.creditos.on('pointerover',()=>this.dentroC());               
        
        //Creacion de la puntuacion con API rest
        puntuacion1 = {
                puntos: 0
            }       
        if (primeraPartida == undefined && !creado) {
        	createPuntuacion(puntuacion1);
        	creado=true;
        }
             
    }

    update() {      

    }

    fueraJ(){
        this.jugar.setStyle({ fill: '#000000' });
    }

    dentroJ(){
        this.jugar.setStyle({ fill: '#FFFFFF'});
    }

    fueraCJ(){
        this.comoJugar.setStyle({ fill: '#000000' });
    }

    dentroCJ(){
        this.comoJugar.setStyle({ fill: '#FFFFFF'});
    }

    fueraC(){
        this.creditos.setStyle({ fill: '#000000' });
    }

    dentroC(){
        this.creditos.setStyle({ fill: '#FFFFFF'});
    }
}

function createPuntuacion(puntuacion) {
    $.ajax({
        method: "POST",
        url: '/puntuaciones',
        data: JSON.stringify(puntuacion),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (puntuacion) {
        console.log("Puntuacion creada: " + JSON.stringify(puntuacion));
        idJugador1=puntuacion.id;
        console.log("Id J1 : "+idJugador1);  
        // callback(item);
    })
}

function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        console.log('puntuaciones cargadas: ' + JSON.stringify(puntuaciones));         
        callback(puntuaciones);
    })
}