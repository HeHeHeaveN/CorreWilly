class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);        
    }

    crearJugador(escena, x, y){
        escena.matter.add.sprite(x, y, 'spriteSheerJugador', 30);
    }

        
}