class victoria2 extends Phaser.Scene {
    constructor() {
        super("victoria2Scene");
    }

    preload() {
    }

    create() {
        var fondo = this.add.image(1600, 900, 'ganar2');
        fondo.setScale(1.67);
        setTimeout(recarga,3000);

    }

    update() {

    }
}

function recarga(){
    location.reload();
}