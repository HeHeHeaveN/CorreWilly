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

       
        
    }

    update() {
        

        if(cursors.left.isDown){
            this.scene.start('menuPScene');
            
        }

    }
}