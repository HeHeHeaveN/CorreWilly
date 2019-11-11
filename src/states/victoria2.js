class victoria2 extends Phaser.Scene {
    constructor() {
        super("victoria2Scene");
    }

    preload() {
        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');
    }

    create() {
        var fondo = this.add.image(1600, 900, 'fondo')

    }

    update() {

    }
}