class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    preload() {

    }

    create() {
        this.add.image(800, 450, 'fondo');

        //let jugador = this.matter.add.sprite(100, 100, 'spriteSheerJugador', 1);

        let jugador = new jugador(this);
    }

    update() {

    }
}
