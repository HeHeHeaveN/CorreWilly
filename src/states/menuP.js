class menuP extends Phaser.Scene {
    constructor() {
        super("menuPScene");
    }

    preload() {
        //fondo
        this.load.image('menu', 'assets/Menu_inicio.png');

    }

    create() {

        //Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(2);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', function (pointer) {

            if((pointer.x>1381 && pointer.x<1848)&&(pointer.y>913 && pointer.y<1058)){
                this.scene.start('juegoScene');
            }


            console.log(pointer.x); 
            console.log(pointer.y);

    
        }, this);
        
    }

    update() {
        

        if(cursors.up.isDown){
            this.scene.resume('juegoScene');
        }

    }
}