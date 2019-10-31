class Jugador extends  Phaser.GameObjects.Sprite {
    constructor(scene){
        super()        
    }

    create() {
        matterSprite: this.matter.add.sprite(100, 100, 'jugador', 4)
    }
}