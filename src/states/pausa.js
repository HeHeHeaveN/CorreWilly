var jg;


class Pausa extends Phaser.Scene {
    constructor() {
        super("pausaScene");
    }

    preload() {


    }

    create() {

       jg=this.scene.get('juegoScene');

        this.input.keyboard.on('keydown-' + 'R', function (event) {
            this.scene.stop();
            this.scene.resume('juegoScene');
        }, this);

        this.input.keyboard.on('keydown-' + 'M', function (event) {
            jg.scene.stop();
            this.scene.stop();
            this.scene.run('menuPScene');
        }, this);
        
        
    }

    update() {
        

    }
}