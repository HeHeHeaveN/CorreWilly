class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {

        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');
        //plataforma
        this.load.image('plataforma', 'assets/plataforma1.png');
        //spritesheet jugador 
        //this.load.spritesheet('spriteSheerJugador', 'assets/sprite sheet/Personaje256.png', { frameWidth: 256, frameHeight: 256 });
    }

    create() {

        this.scene.start('juegoScene');

    }

    update() {

    }
}