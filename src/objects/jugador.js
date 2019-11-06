class Jugador extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y) {
        super(scene);    
        
        this.bounce = 0.2;
        this.sprite = this.scene.physics.add.sprite(x, y, 'spriteSheerJugador');
        this.sprite.setBounce(this.bounce);
        this.sprite.setCollideWorldBounds(true);
    }

    /*crearJugador(escena, x, y){
        //escena.matter.add.sprite(x, y, 'spriteSheerJugador', 30);

        var jug = escena.physics.add.sprite(x, y, 'spriteSheerJugador');

        jug.setBounce(this.bounce);
        jug.setCollideWorldBounds(true);

        return (jug);

        //player = this.physics.add.sprite(100, 450, 'dude');
    }*/


    getRebote() { return this.bounce; }
    setRebote(a) { this.bounce = a; }
    
    //actualizarBounce(jug, bounce){
        //var aux = jug;
        //aux.setBounce(jug, bounce);

    //s}
    

        
}