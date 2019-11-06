class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);        
    }

    crearJugador(escena, x, y){
        //escena.matter.add.sprite(x, y, 'spriteSheerJugador', 30);

        escena.jugador = escena.physics.add.sprite(x, y, 'spriteSheerJugador');

        escena.jugador.setBounce(0.2);
        escena.jugador.setCollideWorldBounds(true);

        return (escena.jugador);

        //player = this.physics.add.sprite(100, 450, 'dude');
    }

    /*
    actualizarBounce(jugador){

        jugador.setBounce(1);

    }
    */

        
}