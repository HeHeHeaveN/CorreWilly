class Controles extends Phaser.Scene {
    constructor() {
        super("controlesScene");
    }

    preload() {
        //fondo
        this.load.image('control', 'assets/Como_jugar.png');

    }

    create() {

        

        //Fondo
        var fondo = this.add.image(1600, 900, 'control')
        fondo.setScale(2);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        cursors = this.input.keyboard.addKeys({
            esc: 'ESC',
        });
        
    }

    update() {
        

        if(cursors.esc.isDown){
            this.scene.start('menuPScene');

        }

    }
}