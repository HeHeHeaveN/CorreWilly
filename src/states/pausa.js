

class Pausa extends Phaser.Scene {
    constructor() {
        super("pausaScene");
    }

    preload() {


    }

    create() {


        this.input.keyboard.on('keydown-' + 'R', function (event) {
            this.scene.stop();
            this.scene.resume('juegoScene');
        }, this);
        
    }

    update() {
        

    }
}