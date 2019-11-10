//Declaracion de variables de la escena
var jugador;
var jugador2;

var cursors;
var cursors2;

var plataforma;

var camera;

var posx; 
var posy;
var posC;
var posB;
var posA;

var cof1;
var cof2;

class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }

    
    preload() {

    }
    

    create() {
        cof1=10;
        cof2=190;
        
        //Fondo
        this.add.image(800, 450, 'fondo')

        //plataforma
        plataforma = new Plataforma(this);
        
        plataforma.crearPlataforma(200, 200);
        plataforma.crearPlataforma(400, 400);

        /*
        plataforma.crearPlataforma(this, 350, 700);
        plataforma.crearPlataforma(this, 800, 800);
        //plataforma.depth = -1;
        */
        


        //Controles del jugador 1
        cursors = this.input.keyboard.createCursorKeys();

        //Controles del jugador 2
        cursors2 = this.input.keyboard.addKeys({
            w: 'W',
            a: 'A',
            d: 'D',
        });

        //animaciones jugador 1
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

        
        //animaciones jugador 2
        this.anims.create({
            key: 'lefta',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador2', { start: 10, end: 19 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'turna',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador2', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'saltoa',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador2', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'righta',
            frames: this.anims.generateFrameNumbers('spriteSheetJugador2', { start: 20, end: 29 }),
            frameRate: 12,
            repeat: -1
        });
        

        this.add.image(800, 450, 'fondo');
      
        
        //Creacion del Jugador 1
        jugador = new Jugador(this, 100, 100, 1);


        //Creacion del Jugador 2
        jugador2 = new Jugador(this, 300, 300, 2);

        camera = this.cameras.main;

        //Creacion de la camara
        this.cameras.main.setBounds(0, 0, 1600, 900);

       
        

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
            jugador2.sprite.setVelocityX(-(jugador2.getVelocidadHorizontal()));

            jugador2.sprite.anims.play('lefta', true);
        }
        else if (cursors2.d.isDown) {
            jugador2.sprite.setVelocityX(jugador2.getVelocidadHorizontal());

            jugador2.sprite.anims.play('righta', true);
        }
        else {
            jugador2.sprite.setVelocityX(0);

            jugador2.sprite.anims.play('turna', true);
        }

        if (cursors2.w.isDown && jugador2.sprite.body.touching.down) {
            jugador2.sprite.setVelocityY(-(jugador2.getVelocidadSalto()));

            jugador2.sprite.anims.play('saltoa', true); //Ajustar con los sprites
        }

        if(jugador.getX()>jugador2.getX()){
            camera.startFollow(jugador2.sprite);
        }else{
            camera.startFollow(jugador.sprite);
        }

       

        //Update de la camara
        posx=jugador.getX()-jugador2.getX(); 
        posy=jugador.getY()-jugador2.getY(); 
        posC=posx/cof1; 
        posB=posx/cof2;
        posA=posy/cof2;
        
        //Funcion para el zoom
        if(Math.abs(posx)<150){
            camera.setZoom(2.60);
        }else{
            camera.setZoom((Math.abs(1/(posB*posB))+1));
        }

        /*
        if(Math.abs(posy)<150){
            camera.setZoom(2.60);
        }else{
            camera.setZoom((Math.abs(1/(posA*posA))+1));
        }*/        
    }
}


