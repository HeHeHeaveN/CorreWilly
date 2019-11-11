class Nivel extends Phaser.GameObjects.Sprite {
    constructor(scene,idS) {
        super(scene)
        this.idN=idS;       
    }

    crearNivel(escena,plataforma,estrella){
        if(idN==1){
            var plataformas = 6;
            var distanciaPlataformas =200;
            var distanciafinal = 2600;
            var posicion1 = 0;
            var posicion2 = 400;

            for (var i = 0; i < plataformas; i++) {
                while (posicion1 < distanciafinal) {
                    posicion1 += Phaser.Math.Between(400, 800);
                    if(posicion1 < distanciafinal){
                        if (Math.random() < 0.5) {
                            plataforma.crearPlataforma2(escena, posicion1, posicion2+50);
                        } else {
                            plataforma.crearPlataforma(escena, posicion1, posicion2);
                        }
                    }
                    
                }
                posicion1 = 0;
                posicion2 += distanciaPlataformas;
            }
            plataforma.crearPlataforma2(escena, 100, 1300);
            plataforma.crearPlataforma2(escena, 3000, 700);

            /*
            var estrella = escena.physics.add.sprite(100,100,'estrella');
            estrella.setScale(0.1);
            estrella.depth=1;
            */
        }

        if(idN==2){
            plataforma.crearPlataforma2(escena, 100, 500);
            plataforma.crearPlataforma(escena, 800, 200);
        }       
    }

}