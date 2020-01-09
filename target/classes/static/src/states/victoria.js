class victoria extends Phaser.Scene {
    constructor() {
        super("victoriaScene");
    }

    preload() {
    }

    create() {
    	
    	// Cargar puntuacion del server
        loadpuntuaciones(function (puntuaciones) {

            //puntos1 = 0;
        	puntos1 = puntuaciones[idJugador1-1].puntuacion;
        	console.log("puntuacion j1:" + puntos1);
        	
        	//puntos2 = 0;
        	puntos2 = puntuaciones[idJugador2-1].puntuacion;
        	console.log("puntuacion j2:" + puntos2);
        	
        });
    	
        var fondo = this.add.image(1600, 900, 'ganar');
        fondo.setScale(1.67);
        //setTimeout(recarga,3000);

        if(idGanador%2 == 0){
        	 var ganador = this.add.image(600, 350, 'spriteSheetJugador2');
        }else{
        	var ganador = this.add.image(600, 350, 'spriteSheetJugador');
        }
        ganador.setScale(4);
       
        /*
        var text1 = this.add.text(800, 650, '2', { font: '400px Arial' });
        var text2 = this.add.text(1500, 650, '-', { font: '400px Arial' });
        var text3 = this.add.text(2100, 650, '2', { font: '400px Arial' });
        */

       this.text1 = this.add.text(800, 650, puntos1, { font: '400px Arial' });
       this.text1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
       this.text1.depth = 70;
       
       this.text2 = this.add.text(1500, 650, '-', { font: '400px Arial' });

       this.text3 = this.add.text(2100, 650, puntos2, { font: '400px Arial' });
       this.text3.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
       this.text2.depth = 70;
       

        var azul = this.add.image(950, 1200, 'spriteSheetJugador')
        azul.setScale(3);
        var rosa = this.add.image(2200, 1200, 'spriteSheetJugador2')
        rosa.setScale(3);

        this.text4 = this.add.text(200, 1500, 'Volver a jugar', { font: '180px Arial' });
        this.text4.setInteractive();

        this.text4.on('pointerdown', function() {
            music.stop();
            setTimeout(this.scene.start("juegoScene"), 1000); 
        }, this);

        this.text5 = this.add.text(1800, 1500, 'Menu principal', { font: '180px Arial' });
        this.text5.setInteractive();
        this.text5.on('pointerdown', function() {
            music.stop();
            setTimeout(this.scene.start("menuPScene"), 1000); 
        }, this);

    }

    update() {

    }

}

function recarga() {
    location.reload();
}

function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        console.log('puntuaciones loaded: ' + JSON.stringify(puntuaciones));
        callback(puntuaciones);
    })
}