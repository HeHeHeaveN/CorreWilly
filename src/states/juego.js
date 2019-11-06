class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
        
    }

    
    preload() {

    }
    

    create() {


        var jugador;

        this.add.image(800, 450, 'fondo')

        this.plataforma = new Plataforma(this);

        
        //var plataformas = this.matter.add.staticGroup();

        //this.plataforma.crearPlataforma(plataformas, 200, 200);

        //Jugador 1
        jugador = new Jugador(this);
        jugador.crearAnimacion(this);
        //jugador.setFriction(1000, 100);
        jugador.crearJugador(this, 100, 100);


        //Jugador 2

        /*
        this.jugador2 = new Jugador(this);

    
        this.jugador2.crearJugador(this, 200, 200);
        this.jugador2.setInteractive();
        this.jugador2.setTint(0xfc8987);
*/
        

    }

    update() {

    }
}
