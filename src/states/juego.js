//Declaracion de variables de la escena
var jugador;
var jugador2;
var jugador3;

var posicionInicial1x; 
var posicionInicial1y; 
var posicionInicial2x; 
var posicionInicial2y;

var posBanderaX; 
var posBanderaY;

var cursors;
var cursors2;

var plataforma;

var camera;

var posx;
var posy;
var posC;
var posB;
var posA;

var camaraX;
var camaraY;

var cof1;
var cof2;

class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }


    preload() {

    }


    create() {
        //Coeficientes para el zoom de la camara
        cof1 = 10;
        cof2 = 190;

        //posiciones iniciales de la camara
        camaraX = 0;
        camaraY = 0;

        //posiciones de reaparicion
        posicionInicial1x=100; 
        posicionInicial1y=100; 
        posicionInicial2x=300; 
        posicionInicial2y=300;

        //posicion de la bandera
        posBanderaX=800; 
        posBanderaY=300;

        //Fondo
        var fondo = this.add.image(800, 450, 'fondo')
        fondo.depth = -2;

        //Bandera 
        var bandera= this.add.image(posBanderaX, posBanderaY, 'bandera');
        bandera.setScale(0.5);
        bandera.depth = 1;
        

        //plataforma
        plataforma = new Plataforma(this);

        plataforma.crearPlataforma(this, 100, 500);
        plataforma.crearPlataforma(this, 800, 400);


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

        //Añadimos el fondo a la escena
        this.add.image(800, 450, 'fondo');


        //Creacion del Jugador 1
        jugador = new Jugador(this, posicionInicial1x, posicionInicial1y, 1);


        //Creacion del Jugador 2
        jugador2 = new Jugador(this, posicionInicial2x, posicionInicial2y, 2);

        jugador3 = new Jugador(this, camaraX, camaraY, 3);


        //Creacion de la camara
        camera = this.cameras.main;
        this.cameras.main.setBounds(0, 0, 1600, 900);

        //Colisiones entre los jugadores y las plataformas
        this.physics.add.collider(jugador.sprite, plataforma.plataformas);
        this.physics.add.collider(jugador2.sprite, plataforma.plataformas);

        //Colisiones entre los jugadores
        this.physics.add.collider(jugador.sprite, jugador2.sprite);

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


        //CAMARA

        //Seguimos a la posicion intermedia entre los jugadores
        camera.startFollow(jugador3.sprite);

        //Update de la camara
        posx = jugador.getX() - jugador2.getX();
        posy = jugador.getY() - jugador2.getY();
        posC = posx / cof1;
        posB = posx / cof2;
        posA = posy / cof2;


        camaraX = (jugador.getX() + jugador2.getX()) / 2;
        camaraY = (jugador.getY() + jugador2.getY()) / 2;
        jugador3.setX(camaraX);
        jugador3.setY(camaraY);


        //Funcion para el zoom
        if (Math.abs(posx) > Math.abs(posy)) {
            if (Math.abs(posx) < 150) {
                camera.setZoom(2.60);
            } else {
                if (Math.abs(posx) > 150) {
                    camera.setZoom((Math.abs(1 / (posB * posB)) + 1));
                }
            }
        } else {
            if (Math.abs(posy) < 150) {
                camera.setZoom(2.60);
            } else {
                if (Math.abs(posy) > 150) {
                    camera.setZoom((Math.abs(1 / (posA * posA)) + 1));
                }
            }
        }
        //FIN DE LA CAMARA

        
        //Funcion para reaparecer si mueres
        if(jugador.getY()>860){
            jugador.setX(posicionInicial1x);
            jugador.setY(posicionInicial1y);
        } 

        if(jugador2.getY()>860){
            jugador2.setX(posicionInicial2y);
            jugador2.setY(posicionInicial2y);
        }

        if((jugador.getX()>posBanderaX-100 && jugador.getX()<posBanderaX+100)&&(jugador.getY()>posBanderaY-100 && jugador.getY()<posBanderaY+100)){
            this.scene.start('victoria1Scene');
        }

        if((jugador2.getX()>posBanderaX-100 && jugador2.getX()<posBanderaX+100)&&(jugador2.getY()>posBanderaY-100 && jugador2.getY()<posBanderaY+100)){
            this.scene.start('victoria2Scene');
        }
    }

    
}