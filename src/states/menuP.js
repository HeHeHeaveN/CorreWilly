var puntos1;
var puntos2;

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
        fondo.setScale(1.67);
        fondo.depth = -2;

        cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', function (pointer) {

            if((pointer.x>1381 && pointer.x<1848)&&(pointer.y>913 && pointer.y<1058)){
                this.scene.start('juegoScene');
            }

            if((pointer.x>1144 && pointer.x<2050)&&(pointer.y>1140 && pointer.y<1288)){
                this.scene.start('controlesScene');
            }

            if((pointer.x>1280 && pointer.x<1940)&&(pointer.y>1347 && pointer.y<1475)){
                this.scene.start('creditosScene');
            }

    
        }, this);

        puntos1 = 0;
        puntos2 = 0;
        
    }

    update() {
        

    }
}