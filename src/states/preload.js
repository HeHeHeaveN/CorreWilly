class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {

        this.load.image('fondo', 'assets/fondo.jpg');
        this.load.spritesheet('spriteSheerJugador', 'assets/sprite sheet/Personaje256.png', { frameWidth: 256, frameHeight: 256 });
    }

    create() {

        this.scene.start('juegoScene');

    }

    update() {

    }
}