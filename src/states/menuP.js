class menuP extends Phaser.Scene {
    constructor() {
        super("menuPScene");
    }

    preload() {
        //fondo
        this.load.image('fondo', 'assets/fondo.jpg');

    }

    create() {

        //Fondo
        var fondo = this.add.image(1600, 900, 'fondo')
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();


    }

    update() {
        if (cursors.down.isDown) {
            this.scene.start('juegoScene');
        }

        if(cursors.up.isDown){
            this.scene.resume('juegoScene');
        }

    }
}