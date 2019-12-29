var puntos1=0;
var puntos2=0;

var puntuacion1;
var puntuacion2;

var primeraPartida;

var idJugador1 = -1;
//var idJugador2 = -1;

var aux;

class menuP extends Phaser.Scene {
    constructor() {
        super("menuPScene");
    }

    preload() {
        //fondo
        this.load.image('menu', 'assets/Menu_inicio.png');

    }

    create() {
    	
    		    	    	
    	
    	aux=false;

        //Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(1.67);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        /*this.input.on('pointerdown', function (pointer) {

            if((pointer.x>1381 && pointer.x<1848)&&(pointer.y>913 && pointer.y<1058)){
                this.scene.start('juegoScene');
            }

            if((pointer.x>1144 && pointer.x<2050)&&(pointer.y>1140 && pointer.y<1288)){
                this.scene.start('controlesScene');
            }

            if((pointer.x>1280 && pointer.x<1940)&&(pointer.y>1347 && pointer.y<1475)){
                this.scene.start('creditosScene');
            }

    
        }, this);*/

        this.jugar=this.add.text(1300,900,"Jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('lobbyScene'));
        this.comoJugar=this.add.text(1050,1100,"Como jugar",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('controlesScene'));
        this.creditos=this.add.text(1200,1300,"Creditos",{fill: '#000000', font: '200px Arial'}).setInteractive().on('pointerdown',()=>this.scene.start('creditosScene'));
        
        this.jugar.on('pointerout',()=>this.fueraJ());
        this.jugar.on('pointerover',()=>this.dentroJ());
        this.comoJugar.on('pointerout',()=>this.fueraCJ());
        this.comoJugar.on('pointerover',()=>this.dentroCJ());
        this.creditos.on('pointerout',()=>this.fueraC());
        this.creditos.on('pointerover',()=>this.dentroC());
        
        
        //puntos2 = 0;
        
        puntuacion1 = {
        		//id: 1,
                puntos: 0
            }
        
        /*puntuacion2 = {
        		//id:2,
        		puntos: puntos2
        }*/
        
        if (primeraPartida == undefined) {
        	createPuntuacion(puntuacion1);
        	//createPuntuacion(puntuacion2);
        }
        
        setTimeout(inicializa,1000);
        
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
        console.log("Puntuacion created: " + JSON.stringify(puntuacion));
        //callback(item);
    })
}

function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        console.log('puntuaciones loaded: ' + JSON.stringify(puntuaciones));
        callback(puntuaciones);
    })
}

function inicializa(){
	if(idJugador1 == -1){
    	loadpuntuaciones(function (puntuaciones) {
            
        	//idJugador1 = puntuaciones.length-1;
    		idJugador1 = puntuaciones.length;
        	//idJugador2 = puntuaciones.length;
        	
        	console.log("Id J1 : "+idJugador1);
        	//console.log("Id J2 : "+idJugador2);
            
        });
    }
}