class victoria1 extends Phaser.Scene {
    constructor() {
        super("victoria1Scene");
    }

    preload() {
        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');
    }

    create() {
      this.add.image(800, 450, 'fondo')

    }

    update() {

    }
}