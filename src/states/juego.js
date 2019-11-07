var plataforma;

class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    preload() {

    }

    create() {
        
        this.add.image(800, 450, 'fondo')

        plataforma = new Plataforma(this);

        //var plataformas = scene.physics.add.staticGroup();

        plataforma.crearPlataforma(this, 300, 700);
        plataforma.crearPlataforma(this, 800, 800);
        

    }

    update() {

    }
}
