var escena;
var escenaV=false;
var pulsable=true;

class victoria extends Phaser.Scene {
    constructor() {
        super("victoriaScene");
    }

    preload() {
    }

    create() {
    	
    	escena=this;
    	escenaV=true;

        var fondo = this.add.image(1600, 900, 'ganar');
        fondo.setScale(1.67);

        if(idGanador%2 == 0){
        	 var ganador = this.add.image(600, 350, 'spriteSheetJugador2');
        }else{
        	var ganador = this.add.image(600, 350, 'spriteSheetJugador');
        }
        ganador.setScale(4);    
        
        this.text2 = this.add.text(1500, 650, '-', { font: '400px Arial' });

        var azul = this.add.image(950, 1200, 'spriteSheetJugador')
        azul.setScale(3);
        var rosa = this.add.image(2200, 1200, 'spriteSheetJugador2')
        rosa.setScale(3);

        this.text4 = this.add.text(200, 1500, 'Volver a jugar', {fill: '#000000', font: '180px Arial' });
        this.text4.setInteractive();
        this.text4.on('pointerout',()=>this.fuera4());
        this.text4.on('pointerover',()=>this.dentro4());

        this.text4.on('pointerdown', function() {
        	var mensaje = {
                    otroUsuario: idJugador1,
                    codigo:780
                };
        	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));            
        }, this);

        this.text5 = this.add.text(1800, 1500, 'Menu principal', {fill: '#000000', font: '180px Arial' });
        this.text5.setInteractive();
        this.text5.on('pointerout',()=>this.fuera5());
        this.text5.on('pointerover',()=>this.dentro5());
                
        this.text5.on('pointerdown', function() {
        	var mensaje = {
                    otroUsuario: idJugador1,
                    codigo:750
                };
        	if(pulsable){
        		stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));     
            	recarga();
        	}       	
        }, this);

    }

    update() {
    	loadpuntuaciones(function (puntuaciones) {
    		if(escenaV){
    			if(idJugador1%2==1){
            		puntos1 = puntuaciones[idJugador1-1].puntuacion;
                	puntos2 = puntuaciones[idJugador1].puntuacion; 
                	escena.text1 = escena.add.text(800, 650, puntos1, { font: '400px Arial' });
                    escena.text1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
                    escena.text1.depth=70;
                    escena.text3 = escena.add.text(2100, 650, puntos2, { font: '400px Arial' });
                    escena.text3.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
                    escena.text3.depth=70;
                    
                    
                    
            	}
            	if(idJugador1%2==0){
            		puntos1 = puntuaciones[idJugador1-2].puntuacion;
                	puntos2 = puntuaciones[idJugador1-1].puntuacion; 
                	escena.text1 = escena.add.text(800, 650, puntos1, { font: '400px Arial' });
                    escena.text1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
                    escena.text1.depth=70;
                    escena.text3 = escena.add.text(2100, 650, puntos2, { font: '400px Arial' });
                    escena.text3.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
                    escena.text3.depth=70;
            	}
    		}
        	        	   	
        });

    }
    
    
    fuera4(){
        this.text4.setStyle({ fill: '#000000' });
    }

    dentro4(){
        this.text4.setStyle({ fill: '#FFFFFF'});
    }
    
    fuera5(){
        this.text5.setStyle({ fill: '#000000' });
    }

    dentro5(){
        this.text5.setStyle({ fill: '#FFFFFF'});
    }

}

function recarga() {
    location.reload();
}

function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        // console.log('puntuaciones loaded: ' + JSON.stringify(puntuaciones));
        callback(puntuaciones);
    })
}
/*
function onPosReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	if(mensaje.codigo==770){
		escenaSiguiente=true;
	}	
	if(mensaje.codigo==null){
		if(mensaje.otroUsuario%2==1 && idJugador1%2==0){
			jugador.setX(mensaje.posX); 
			jugador.setY(mensaje.posY);
		}
		
		if(mensaje.otroUsuario%2==0 && idJugador1%2==1){
			jugador2.setX(mensaje.posX);
			jugador2.setY(mensaje.posY);
		}
	}
	if(mensaje.codigo==780){
		escenaV=false;
		//music.stop();
        pararJug1=false;
    	pararJug2=false;
    	escenaSiguiente=false;
    	setTimeout(escena.scene.start("juegoScene"), 1000); 
	}	
	if(mensaje.codigo==750){
		recarga();
	}	
	
	if(mensaje.codigo==404){
		if(mensaje.otroUsuario%2==1 && idJugador1%2==0){
			setTimeout(eco(),4000);
		}
		if(mensaje.otroUsuario%2==0 && idJugador1%2==1){
			setTimeout(eco(),4000);
		}
	}
}*/