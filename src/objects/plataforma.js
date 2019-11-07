class Plataforma extends Phaser.GameObjects.Sprite {
    constructor(scene){
        super(scene)
    }

    crearPlataforma(platforms, x, y){
        platforms.create(x, y, 'plataforma')
    }

}