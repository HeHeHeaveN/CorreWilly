var jg;


class Pausa extends Phaser.Scene {
    constructor() {
        super("pausaScene");
    }

    preload() {


    }

    create() {

        jg=this.scene.get('juegoScene');

        var fondo = this.add.image(1600, 900, 'pausa')
        fondo.setScale(4);
        fondo.depth = 7;

        this.input.keyboard.on('keydown-' + 'R', function (event) {
            fondo.depth = -7;
            this.scene.stop();
            // music.resume();
            this.scene.resume('juegoScene');
        }, this);

        this.input.keyboard.on('keydown-' + 'M', function (event) {
            fondo.depth = -7;
            jg.scene.stop();
            this.scene.stop();
            this.scene.run('menuPScene');
        }, this);

    
        
        
    }

    update() {
        

    }
}