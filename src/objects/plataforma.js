class Plataforma extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene)

    }

    crearPlataforma(platforms, x, y) {
        var imagen = platforms.add.image(x, y, 'plataformaNormal')
        imagen.depth = 1;
    }

}