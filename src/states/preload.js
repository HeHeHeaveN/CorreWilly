class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {
        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');
        //plataforma
        this.load.image('plataforma', 'assets/Plataforma.png')
        //jugador
        this.load.spritesheet('spriteSheetJugador', 'assets/sprite-sheet/Personaje.png', { frameWidth: 128, frameHeight: 128 });
    }

    create() {

        this.scene.start('juegoScene');

    }

    update() {

    }
}