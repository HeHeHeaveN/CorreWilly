var fondo;

class victoria1 extends Phaser.Scene {
    constructor() {
        super("victoria1Scene");
    }

    preload() {
        //fondo
        this.load.image('ganar1', 'assets/Player_1_wins');
    }

    create() {
      fondo=this.add.image(1600, 900, 'ganar1')
      fondo.setScale(1.67);
      setTimeout(recarga,3000);

    }

    update() {

    }

}

function recarga(){
    location.reload();
}