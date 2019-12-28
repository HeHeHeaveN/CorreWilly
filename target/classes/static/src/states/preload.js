class preload extends Phaser.Scene {
    constructor() {
        super("preloadScene");
    }

    preload() {
        //fondo
        this.load.image('fondo-setas', 'assets/Pantallas-Fondos/Fondo-setas.png');
        this.load.image('fondo-robots', 'assets/Pantallas-Fondos/Fondo-robots.png');
        this.load.image('menu', 'assets/Pantallas-Fondos/Menu-inicio.png');
        this.load.image('ganar', 'assets/Pantallas-Fondos/ganar.png')
        this.load.image('ganar1', 'assets/Pantallas-Fondos/Azul-ganador.png');
        this.load.image('ganar2', 'assets/Pantallas-Fondos/Rosa-ganador.png');
        this.load.image('control', 'assets/Pantallas-Fondos/Como-jugar.png');
        this.load.image('creditos', 'assets/Pantallas-Fondos/Creditos.png');
        this.load.image('pausa', 'assets/Pantallas-Fondos/Pausa.png');
        //plataformas
        this.load.image('plataformaNormal', 'assets/plataformas/plataforma.png')
        this.load.image('plataformaRobotica', 'assets/plataformas/plataforma-robot.png')
        //jugadores
        this.load.spritesheet('spriteSheetJugador', 'assets/sprite-sheet/Personaje-1.png', { frameWidth: 128, frameHeight: 113 });
        this.load.spritesheet('spriteSheetJugador2', 'assets/sprite-sheet/Personaje-2.png', { frameWidth: 128, frameHeight: 113 });
        this.load.spritesheet('spriteSheetJugador3', 'assets/sprite-sheet/camara', { frameWidth: 64, frameHeight: 56 });
        //Bandera 
        this.load.image('bandera', 'assets/bandera.png');
        //PowerUps 
        this.load.image('estrella', 'assets/power-ups/estrella.png');
        //Musica
        this.load.audio('theme', [
            'assets/corre.mp3'
        ]);
    }

    create() {

        this.scene.start('menuPScene');

    }

    update() {

    }
}