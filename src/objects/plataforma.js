class Plataforma extends Phaser.GameObjects.Sprite {
    constructor(scene){
        super(scene)
    }

    crearPlataforma(escena, x, y){
        escena.add.image(x, y, 'plataforma')
    }

}