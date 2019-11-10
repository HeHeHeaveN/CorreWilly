class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {
        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');
        //plataformas
        this.load.image('plataformaNormal', 'assets/plataformas/plataforma.png')
        this.load.image('plataformaRobotica', 'assets/plataformas/plataforma-robot.png')
        this.load.image('plataformaVacia', 'assets/plataformas/plataforma-vacia.png')
        //jugadores
        this.load.spritesheet('spriteSheetJugador', 'assets/sprite-sheet/Personaje-1.1.png', { frameWidth: 64, frameHeight: 56 });
        this.load.spritesheet('spriteSheetJugador2', 'assets/sprite-sheet/Personaje-2.1.png', { frameWidth: 64, frameHeight: 56 });
        this.load.spritesheet('spriteSheetJugador3', 'assets/sprite-sheet/camara', { frameWidth: 64, frameHeight: 56 });
        //Bandera 
        this.load.image('bandera', 'assets/bandera.png');
    }

    create() {

        this.scene.start('menuPScene');

    }

    update() {

    }
}