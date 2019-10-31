class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    preload() {

    }

    create() {
        this.add.image(800, 450, 'fondo')

        //var jugadoractual = new jugador(); hay que llamarlo desde aqui

        matterSprite: this.matter.add.sprite(100, 100, 'jugador', 1)  // implementar en jugador.js
    }

    update() {
        
    }
}