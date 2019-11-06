class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");

    }

    preload() {

    }

    create() {
        this.add.image(800, 450, 'fondo');

        //Jugador 1
        jugador = new Jugador(this, 100, 100);
        jugador.sprite.setBounce(1);


        //Jugador 2
        jugador2 = new Jugador(this, 300, 300);       

    }

    update() {



    }
}

var jugador;
var jugador2;
