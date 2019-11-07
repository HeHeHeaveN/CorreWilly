//Declaracion de variables de la escena
var jugador;
var jugador2;

var cursors;
var cursors2;

var plataforma;


class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    
    preload() {

    }
    

    create() {
        
        //Fondo
        this.add.image(800, 450, 'fondo')
        

        plataforma = new Plataforma(this);
        //plataforma.depth = 1;
      
        
        plataforma.crearPlataforma(this, 350, 700);
        plataforma.crearPlataforma(this, 800, 800);
        //plataforma.depth = -1;
        


        //Controles del jugador 1
        cursors = this.input.keyboard.createCursorKeys();

        //Controles del jugador 2
        cursors2 = this.input.keyboard.addKeys({
            w: 'W',
            a: 'A',
            d: 'D',
        });

        //animaciones
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador', { start: 10, end: 19 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'salto',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador', { start: 20, end: 29 }),
            frameRate: 12,
            repeat: -1
        });

        this.add.image(800, 450, 'fondo');
      
        
        //Creacion del Jugador 1
        jugador = new Jugador(this, 100, 100);


        //Creacion del Jugador 2
        jugador2 = new Jugador(this, 300, 300);

    }

    update() {

        //controles jugador 1

        if (cursors.left.isDown) {
            jugador.sprite.setVelocityX(-(jugador.getVelocidadHorizontal()));

            jugador.sprite.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            jugador.sprite.setVelocityX(jugador.getVelocidadHorizontal());

            jugador.sprite.anims.play('right', true);
            //en caso de usar sprites de un solo sentido
            //jugador.sprite.flipX= true;
        }
        else {
            jugador.sprite.setVelocityX(0);

            jugador.sprite.anims.play('turn', true);
        }

        if (cursors.up.isDown && jugador.sprite.body.touching.down) {
            jugador.sprite.setVelocityY(-(jugador.getVelocidadSalto()));

            jugador.sprite.anims.play('salto', true); //Ajustar con los sprites
        }

        //contrloes jugador 2

        if (cursors2.a.isDown) {
            jugador2.sprite.setVelocityX(-(jugador.getVelocidadHorizontal()));

            jugador2.sprite.anims.play('left', true);
        }
        else if (cursors2.d.isDown) {
            jugador2.sprite.setVelocityX(jugador.getVelocidadHorizontal());

            jugador2.sprite.anims.play('right', true);
        }
        else {
            jugador2.sprite.setVelocityX(0);

            jugador2.sprite.anims.play('turn', true);
        }

        if (cursors2.w.isDown && jugador2.sprite.body.touching.down) {
            jugador2.sprite.setVelocityY(-(jugador.getVelocidadSalto()));

            jugador2.sprite.anims.play('salto', true); //Ajustar con los sprites
        }
    }
}


