class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, identificador) {
        super(scene);

        var puntos = 0;

        //Propiedades del jugador
        this.velocidadHorizontal = 400;
        this.velocidadSalto = 380;

        //Propiedades de fisicas
        this.bounce = 0;
        //identificador;

        if (identificador == 1) {
            this.sprite = this.scene.physics.add.sprite(x, y, 'spriteSheetJugador');
            this.sprite.setBounce(this.bounce);
            this.sprite.setCollideWorldBounds(true);

        } else if (identificador == 2){
            this.sprite = this.scene.physics.add.sprite(x, y, 'spriteSheetJugador2');
            this.sprite.setBounce(this.bounce);
            this.sprite.setCollideWorldBounds(true);
        }else{
            if(identificador==3){
                this.sprite = this.scene.add.sprite(x, y, 'camara');
                this.sprite.setVisible(false);
            }
        }

        this.sprite.setScale(0.5);

        this.sprite.x;
        this.sprite.y;
    }



    //Getters y setters de las propiedades
    getRebote() { return this.bounce; }
    setRebote(a) { this.bounce = a; }

    getX() { return this.sprite.x; }
    setX(a) { this.sprite.x = a; }

    getY() { return this.sprite.y; }
    setY(a) { this.sprite.y = a; }

    getVelocidadHorizontal() { return this.velocidadHorizontal; }
    setVelocidadHorizontal(a) { this.velocidadHorizontal = a; }

    getVelocidadSalto() { return this.velocidadSalto; }
    setVelocidadSalto(a) { this.velocidadSalto = a; }

    getIdentificador() { return this.identificador; }
    setIdentificador(a) { this.identificador = a; }

    getPuntos(){return this.puntos;}
    setPuntos(a){this.puntos = a; }

}