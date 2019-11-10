class Plataforma extends Phaser.GameObjects.Sprite {
    constructor(scene) {
        super(scene)

        this.plataformas = this.scene.physics.add.staticGroup();
    }

    crearPlataforma(plat ,x, y) {
    
        this.plataformas.create(x, y, 'plataformaNormal').refreshBody();
        this.plataformas.depth = 1;

        var imagen = plat.add.image(x, y, 'plataformaNormal')
        imagen.depth = 1;

    }

}