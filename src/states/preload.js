class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {

        this.load.image('fondo', 'assets/fondo.jpg');

    }

    create() {

        this.scene.start('juegoScene');

    }

    update() {

    }
}