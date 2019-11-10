class Nivel extends Phaser.GameObjects.Sprite {
    constructor(scene,idS) {
        super(scene)
        this.idN=idS;       
    }

    crearNivel(escena,plataforma){
        if(idN==1){
            var plataformas = 4;
            var distanciaPlataformas =200;
            var distanciafinal = 2000;
            var posicion1 = 0;
            var posicion2 = 200;

            for (var i = 0; i < plataformas; i++) {
                while (posicion1 < distanciafinal) {
                    posicion1 += Phaser.Math.Between(300, 600);
                    if (Math.random() < 0.5) {
                        plataforma.crearPlataforma2(escena, posicion1, posicion2);
                    } else {
                        plataforma.crearPlataforma(escena, posicion1, posicion2);
                    }
                }
                posicion1 = 0;
                posicion2 += distanciaPlataformas;
            }
        }

        if(idN==2){
            plataforma.crearPlataforma2(escena, 100, 500);
            plataforma.crearPlataforma(escena, 800, 200);
        }       
    }

}