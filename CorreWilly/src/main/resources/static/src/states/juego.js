//Declaracion de variables de la escena
var jugador;
var jugador2;

var semilla;

var pararJug1;
var pararJug2;

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
var camera2;

var posx;
var posy;
var posC;
var posB;
var posA;

var music;
var musicaON;

var camaraX;
var camaraY;

var cof1;
var cof2;

var idN;

var nivel;

var estrella;

var cambiar;

var tiempo;

var jug;

var alturaEX;
var alturaEY;

var txt1;
var txt2;

var puntuacion1Updated;
var puntuacion2Updated;

var idGanador;


class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }


    preload() {

    }


    create() {
    	pararJug1=false;
    	pararJug2=false;
        cambiar = false;
        tiempo = false;
        // Coeficientes para el zoom de la camara
        cof1 = 10;
        cof2 = 190;

        // posiciones iniciales de la camara
        camaraX = 0;
        camaraY = 0;

        // posiciones de reaparicion
        posicionInicial1x = 150;
        posicionInicial1y = 800;
        posicionInicial2x = 80;
        posicionInicial2y = 800;

        // posicion de la bandera
        posBanderaX = 3000;
        posBanderaY = 620;
        //posBanderaX = 200;
        //posBanderaY = 1000;

        // Bandera
        var bandera = this.add.image(posBanderaX, posBanderaY, 'bandera');
        bandera.setScale(0.5);
        bandera.depth = 1;

        // Estrella
        var estrella = this.physics.add.sprite(4000, 4000, 'estrella');
        estrella.setScale(0.1);
        estrella.depth = 1;


        // plataforma
        plataforma = new Plataforma(this);


        if(idJugador1==1){
        	// Variable para que se elija el nivel de manera aleatoria
            idN=Math.floor(Math.random() * (3 - 1) + 1); 


            if (idN == 1) {
                // Fondo setas
                var fondo = this.add.image(1600, 900, 'fondo-setas');
                fondo.setScale(1.67);
                fondo.depth = -2;
                // console.log("Fondo setas");
            } else if(idN == 2) {
                // Fondo robots
                var fondo = this.add.image(1600, 900, 'fondo-robots');
                fondo.setScale(1.67);
                fondo.depth = -2;
                // console.log("Fondo robot");
            }

        }
        
        
        if(idJugador1==1){
        	semilla=//Crear semilla 
        	var posXAux=idN;
            var posYAux=semilla;
    		var mensaje = {
                    otroUsuario: idJugador1,
                    contenido: 570;
                    posX: posXAux,
                    posY: posYAux
                };
        	stompClient.send("/app/pos.send", {}, JSON.stringify(mensaje));
        	
        }
        // Crear plataformas nivel
        nivel = new Nivel(this, idN);

        nivel.crearNivel(this, plataforma,semilla);

        // Controles del jugador 1
        cursors = this.input.keyboard.createCursorKeys();

        // Controles del jugador 2
        cursors2 = this.input.keyboard.addKeys({
            w: 'W',
            a: 'A',
            d: 'D',
            p: 'P',
        });

        // animaciones jugador 1
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


        // animaciones jugador 2
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

        // Añadimos el fondo a la escena
        // this.add.image(1600, 900, 'fondo');


        // Creacion del Jugador 1
        jugador = new Jugador(this, posicionInicial1x, posicionInicial1y, 1);


        // Creacion del Jugador 2
        jugador2 = new Jugador(this, posicionInicial2x, posicionInicial2y, 2);


        // Creacion de la camara
        camera = this.cameras.add(0, 0, 1600, 1800);
        camera.setBounds(0, 0, 3200, 1800);

        camera2 = this.cameras.add(1600, 0, 1600, 1800);
        camera2.setBounds(0, 0, 3200, 1800);

        camera.startFollow(jugador.sprite);
        camera2.startFollow(jugador2.sprite);

        
        this.cameras.main.setVisible(false);        
        

        // Colisiones entre los jugadores y las plataformas
        this.physics.add.collider(jugador.sprite, plataforma.plataformas);
        this.physics.add.collider(jugador2.sprite, plataforma.plataformas);

        // Colisiones entre los jugadores
        this.physics.add.collider(jugador.sprite, jugador2.sprite);

        this.physics.add.collider(estrella, plataforma.plataformas);
        // this.physics.add.collider(jugador.)
        var vel = this.physics.add.overlap(jugador.sprite, estrella, power, null, this);
        var vel = this.physics.add.overlap(jugador2.sprite, estrella, power2, null, this);

        for (var i = 0; i < 5; i++) {
            alturaEX = Math.floor(Math.random() * (3000 - 400) + 400);
            alturaEY = Math.floor(Math.random() * (1500 - 400) + 400);
            var estrella = this.physics.add.sprite(alturaEX, alturaEY, 'estrella');
            estrella.setScale(0.1);
            estrella.depth = 1;
            this.physics.add.collider(estrella, plataforma.plataformas);
            var vel = this.physics.add.overlap(jugador.sprite, estrella, power, null, this);
            var vel = this.physics.add.overlap(jugador2.sprite, estrella, power2, null, this);
        }

        // Musica
        music = this.sound.add('theme');
        game.volume = 0;
        music.play();
        music.loop = true;

        musicaON = true;
        // Pausa
        this.input.keyboard.on('keydown-' + 'ESC', function (event) {
            if (music.isPaused) {
                musicaON = true;
            } else {
                musicaON = false;
            }
            music.pause();
            this.scene.pause();
            this.scene.run('pausaScene');
        }, this);

        this.input.keyboard.on('keydown-' + 'N', function (event) {
            if (music.isPlaying) {
                music.pause();
                musicaON = true;
            } else {
                music.resume();
                musicaON = true;
            }
        }, this)

        // Mostrar puntuacion
        txt1 = this.add.text(camera.centerX, camera.centerY - 500, puntos1, { font: '64px Arial' });
        txt1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
        txt1.depth = 70;
        txt1.setScrollFactor(0, 0); 
        camera2.ignore(txt1);  
        
        txt2 = this.add.text(camera.centerX, camera.centerY - 500, puntos2, { font: '64px Arial' });
        txt2.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
        txt2.depth = 70;
        txt2.setScrollFactor(0, 0); 
        camera.ignore(txt2);
        
        primeraPartida = false;
        
        // Id de cada jugador
        

    }

    update() {
    	
    	if(idJugador1==1){
    		var posXAux=jugador.getX();
            var posYAux=jugador.getY();
    		var mensaje = {
                    otroUsuario: idJugador1,
                    posX: posXAux,
                    posY: posYAux
                };
        	stompClient.send("/app/pos.send", {}, JSON.stringify(mensaje));
    	}else{
    		var posXAux=jugador2.getX();
            var posYAux=jugador2.getY();
    		var mensaje = {
                    otroUsuario: idJugador1,
                    posX: posXAux,
                    posY: posYAux
                };
        	stompClient.send("/app/pos.send", {}, JSON.stringify(mensaje));
    	}

        if (musicaON == false) {
            music.resume();
        }

        if (cambiar) {
            if (jug == 1) {
                jugador.setVelocidadHorizontal(800);
            } else {
                if (jug == 2) {
                    jugador2.setVelocidadHorizontal(800);
                }
            }
            setTimeout(parar, 2000);
            cambiar = false;
        }

        if (tiempo) {
            if (jug == 1) {
                jugador.setVelocidadHorizontal(400);
            } else {
                if (jug == 2) {
                    jugador2.setVelocidadHorizontal(400);
                }
            }
            tiempo = false;
        }

        // controles jugador 1

        if(idJugador1%2 !=0){
        	if (cursors.left.isDown) {
                jugador.sprite.setVelocityX(-(jugador.getVelocidadHorizontal()));

                jugador.sprite.anims.play('left', true);            
                
            }
            else if (cursors.right.isDown) {
                jugador.sprite.setVelocityX(jugador.getVelocidadHorizontal());

                jugador.sprite.anims.play('right', true);
                // en caso de usar sprites de un solo sentido
                // jugador.sprite.flipX= true;

            }
            else {
                jugador.sprite.setVelocityX(0);

                jugador.sprite.anims.play('turn', true);
            }

            if (cursors.up.isDown && jugador.sprite.body.touching.down) {
                jugador.sprite.setVelocityY(-(jugador.getVelocidadSalto()));

                jugador.sprite.anims.play('salto', true); // Ajustar con los
    														// sprites
            }
        }else{
        	// contrloes jugador 2

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

                jugador2.sprite.anims.play('saltoa', true); // Ajustar con los
    														// sprites
            }
        }
        

        


        // CAMARA (Pantalla Partida)
        camera.setZoom(1.5);       
        camera2.setZoom(1.5);

        // Funcion para reaparecer si mueres
        if (jugador.getY() > 1700) {
            jugador.setX(posicionInicial1x);
            jugador.setY(posicionInicial1y);
        }

        if (jugador2.getY() > 1700) {
            jugador2.setX(posicionInicial2x);
            jugador2.setY(posicionInicial2y);
        }
        // console.log(puntuacion1.id);

        // Ganador
        if ((jugador.getX() > posBanderaX - 100 && jugador.getX() < posBanderaX + 100) && (jugador.getY() > posBanderaY - 100 && jugador.getY() < posBanderaY + 100)) {
        	if(!pararJug1){
        		loadpuntuaciones(function (puntuaciones) {           		
            		var auxx=puntuaciones[idJugador1-1].puntuacion + 1;
            		puntuacion1Updated = {
                    		id: idJugador1,
                    		puntuacion: auxx
                    }
                    updatePuntuacion(puntuacion1Updated);
                });
            	
            	// jugador.setPuntos(jugador2.getPuntos()+1); No funciona
            	puntos1++
            	console.log("puntos J1: " + puntos1);
                

                idGanador = idJugador1;
                pararJug1=true;
                this.scene.start('victoriaScene');           
                // console.log(puntos1);
        	}
        	
        }
        if ((jugador2.getX() > posBanderaX - 100 && jugador2.getX() < posBanderaX + 100) && (jugador2.getY() > posBanderaY - 100 && jugador2.getY() < posBanderaY + 100)) {
        	if(!pararJug2){
        		loadpuntuaciones(function (puntuaciones) {            		
            		var auxxx=puntuaciones[idJugador1-1].puntuacion + 1;
            		puntuacion2Updated = {
                    		id: idJugador1,
                    		puntuacion: auxxx
                    }
                    updatePuntuacion(puntuacion2Updated);
                });
            	
            	// jugador.setPuntos(jugador2.getPuntos()+1); No funciona
            	puntos2++
            	console.log("puntos J2: " + puntos2);
                

                idGanador = idJugador1;
                pararJug2=true;
                this.scene.start('victoriaScene');           
                // console.log(puntos1);
        	}
        	
        }

    }
}

function power(jugador, estrella) {
    estrella.disableBody(true, true);
    cambiar = true;
    jug = 1;
}

function power2(jugador, estrella) {
    estrella.disableBody(true, true);
    cambiar = true;
    jug = 2;
}

function parar() {
    tiempo = true;
}


// Update item in server
function updatePuntuacion(puntuacion) {
    $.ajax({
        method: 'PUT',
        url: '/puntuaciones/' + puntuacion.id,
        data: JSON.stringify(puntuacion),
        processData: false,
        headers: {
            "Content-Type": "application/json"
        }
    }).done(function (puntuacion) {
        console.log("Updated puntuacion: " + JSON.stringify(puntuacion))
    })
}

function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        console.log('puntuaciones loaded: ' + JSON.stringify(puntuaciones));
        callback(puntuaciones);
    })
}

function onPosReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	
	if(mensaje.contenido==570){
		idN=mensaje.posX; 
		semilla=mensaje.posY;
	}else{
		if(mensaje.otroUsuario==1 && idJugador1==2){
			jugador.setX(mensaje.posX); 
			jugador.setY(mensaje.posY);
		}
		
		if(mensaje.otroUsuario==2 && idJugador1==1){
			jugador2.setX(mensaje.posX);
			jugador2.setY(mensaje.posY);
		}
	}
	
	
	
}
