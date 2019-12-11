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

    crearPlataforma2(plat ,x, y) {
    
        this.plataformas.create(x, y, 'plataformaNormal').setScale(0.7).refreshBody();
        this.plataformas.depth = 1;

        var imagen = plat.add.image(x, y, 'plataformaNormal')
        imagen.depth = 1;
        imagen.setScale(0.7);
    }

    crearPlataformaRobot(plat ,x, y) {
    
        this.plataformas.create(x, y, 'plataformaRobotica').setScale(0.7).refreshBody();
        this.plataformas.depth = 1;

        var imagen = plat.add.image(x, y, 'plataformaRobotica')
        imagen.depth = 1;
        imagen.setScale(0.7);
    }
    crearPlataformaRobot2(plat ,x, y) {
    
        this.plataformas.create(x, y, 'plataformaRobotica').setScale(0.4).refreshBody();
        this.plataformas.depth = 1;

        var imagen = plat.add.image(x, y, 'plataformaRobotica')
        imagen.depth = 1;
        imagen.setScale(0.7);
    }

}