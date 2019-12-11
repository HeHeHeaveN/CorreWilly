class boot extends Phaser.Scene {
    constructor() {
        super("bootScene");
    }

    init(){
        
    }

    preload(){
        
    }

    create() {
        this.scene.start('preloadScene');
    }

    update() {

    }
}