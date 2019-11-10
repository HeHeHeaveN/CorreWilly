class Nivel extends Phaser.GameObjects.Sprite {
    constructor(scene,idS) {
        super(scene)
        this.idN=idS;       
    }

    crearNivel(escena,plataforma){
        if(idN==1){
            plataforma.crearPlataforma2(escena, 100, 500);
            plataforma.crearPlataforma(escena, 800, 400);
        }

        if(idN==2){
            plataforma.crearPlataforma2(escena, 100, 500);
            plataforma.crearPlataforma(escena, 800, 200);
        }


    }

}