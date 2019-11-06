class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    preload() {

    }

    create() {
        this.add.image(800, 450, 'fondo');

        //Jugador 1
        this.jugador = new Jugador(this);
        this.jugador.crearJugador(this, 100, 100);


        //Jugador 2
        this.jugador2 = new Jugador(this);

    
        this.jugador2.crearJugador(this, 200, 200);
        this.jugador2.setInteractive();
        this.jugador2.setTint(0xfc8987);
        

    }

    update() {

    }
}
