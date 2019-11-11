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

       
        
    }

    update() {
        

        if(cursors.left.isDown){
            this.scene.start('menuPScene');
            
        }

    }
}