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

        this.text4 = this.add.text(200, 1500, 'Volver a jugar', { font: '180px Arial' });
        this.text4.setInteractive();

        this.text4.on('pointerdown', function() {
        	var mensaje = {
                    otroUsuario: idJugador1,
                    codigo:780
                };
        	stompClient.send("/app/pos.send", {}, JSON.stringify(mensaje));            
        }, this);

        this.text5 = this.add.text(1800, 1500, 'Menu principal', { font: '180px Arial' });
        this.text5.setInteractive();
        this.text5.on('pointerdown', function() {
        	var mensaje = {
                    otroUsuario: idJugador1,
                    codigo:750
                };
        	if(pulsable){
        		stompClient.send("/app/pos.send", {}, JSON.stringify(mensaje));     
            	recarga();
        	}       	
        }, this);

    }

    update() {
    	loadpuntuaciones(function (puntuaciones) {
    		if(escenaV){
    			if(idJugador1==1){
            		puntos1 = puntuaciones[idJugador1-1].puntuacion;
                	puntos2 = puntuaciones[idJugador1].puntuacion; 
                	escena.text1 = escena.add.text(800, 650, puntos1, { font: '400px Arial' });
                    escena.text1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
                    escena.text1.depth=70;
                    escena.text3 = escena.add.text(2100, 650, puntos2, { font: '400px Arial' });
                    escena.text3.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
                    escena.text3.depth=70;
            	}
            	if(idJugador1==2){
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

function onPosReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	if(mensaje.codigo==770){
		escenaSiguiente=true;
	}	
	if(mensaje.codigo==null){
		if(mensaje.otroUsuario==1 && idJugador1==2){
			jugador.setX(mensaje.posX); 
			jugador.setY(mensaje.posY);
		}
		
		if(mensaje.otroUsuario==2 && idJugador1==1){
			jugador2.setX(mensaje.posX);
			jugador2.setY(mensaje.posY);
		}
	}
	if(mensaje.codigo==780){
		escenaV=false;
		music.stop();
        pararJug1=false;
    	pararJug2=false;
    	escenaSiguiente=false;
    	setTimeout(escena.scene.start("juegoScene"), 1000); 
	}	
	if(mensaje.codigo==750){
		if(mensaje.otroUsuario==1 && idJugador1==2){
			pulsable=false;
			setTimeout(recarga(), 1000); 
		}
		if(mensaje.otroUsuario==2 && idJugador1==1){
			pulsable=false;
			setTimeout(recarga(), 1000); 
		}
	}

}


