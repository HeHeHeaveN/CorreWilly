class Plataforma extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene)

        this.plataformas = this.scene.physics.add.staticGroup();

    }

    crearPlataforma(platforms, x, y) {
        //var imagen = platforms.add.image(x, y, 'plataformaNormal')
        //imagen.depth = 1;

        this.plataformas.create(x, y, 'plataformaNormal');
    }

}