class Creditos extends Phaser.Scene {
    constructor() {
        super("creditosScene");
    }

    preload() {
        //fondo
        this.load.image('creditos', 'assets/Creditos.png');

    }

    create() {

        //Fondo
        var fondo = this.add.image(1600, 900, 'creditos')
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