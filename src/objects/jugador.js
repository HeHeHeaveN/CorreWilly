class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene);    
        
        //Propiedades del jugador
        this.velocidadHorizontal = 400;
        this.velocidadSalto = 500;

        //Propiedades de fisicas
        this.bounce = 0.2;
        this.sprite = this.scene.physics.add.sprite(x, y, 'spriteSheetJugador');
        this.sprite.setBounce(this.bounce);
        this.sprite.setCollideWorldBounds(true);
    }

    

    //Getters y setters de las propiedades
    getRebote() { return this.bounce; }
    setRebote(a) { this.bounce = a; }

    getVelocidadHorizontal() { return this.velocidadHorizontal; }
    setVelocidadHorizontal(a) { this.velocidadHorizontal = a; }

    getVelocidadSalto() { return this.velocidadSalto; }
    setVelocidadSalto(a) { this.velocidadSalto = a; }

}