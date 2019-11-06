class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);     
        
        
    }

    crearJugador(escena, x, y){
        escena.impact.add.sprite(x, y, 'spriteSheerJugador', 30);
    }

    crearAnimacion(escena){    
        escena.anims.create({
            key: 'left',
            frames: escena.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
    }

        
}