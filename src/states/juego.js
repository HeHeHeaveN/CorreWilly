class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    preload() {

    }

    create() {
        this.add.image(800, 450, 'fondo')

        this.plataforma = new Plataforma(this);

        //var plataformas = scene.physics.add.staticGroup();

        this.plataforma.crearPlataforma(this, 200, 200);

        

    }

    update() {

    }
}