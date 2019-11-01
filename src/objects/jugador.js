class jugador extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene);
        
    }

    create() {
        matterSprite: this.matter.add.sprite(100, 100, 'spriteSheerJugador', 1);
    }
}