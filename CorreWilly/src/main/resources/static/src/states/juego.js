//Declaracion de variables de la escena
var jugador;
var jugador2;

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

var nivel;

var estrella;
var muelle;

var cambiar;
var cambiarSalto;

var tiempo;

var jug;

var alturaEX;
var alturaEY;

var txt1;
var txt2;

var puntuacion1Updated;
var puntuacion2Updated;

var idGanador;

var escenaSiguiente=false;
var escena;

var conectado2Aux=true;

var disparador=true;

var fondoPausa; 
var isPaused; 

var no=false;

class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");
    }


    preload() {

    }


    create() {
    	
    	if (primeraPartida == undefined){
    		conectado2Aux=true;
        	//Funciones para hacer un eco y comprobar si esta conectado el otro usuario
        	setInterval(function(){estaConectado()},5000);   
        	setTimeout(function(){dispararTemporizador()},7500);
    	}else{
    		no=true;
    		conectado2Aux=true;
    		setTimeout(function(){ponerNo()},1500);
    	}
    	
    	
    	escena=this;
    	
    	//Menu de pausa
    	fondoPausa = this.add.image(800, 900, 'pausa');
    	fondoPausa.setScrollFactor(0, 0); 
        fondoPausa.setScale(1);
        fondoPausa.depth = 7;
        fondoPausa.setInteractive();
        fondoPausa.setVisible(false);
        isPaused = false;    	
    	
    	pararJug1=false;
    	pararJug2=false;
        cambiar = false;
        cambiarSalto = false;
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

        // Bandera
        var bandera = this.add.image(posBanderaX, posBanderaY, 'bandera');
        bandera.setScale(0.5);
        bandera.depth = 1;

        
        //mejoras de prueba
        /*
        // Estrella
        var estrella = this.physics.add.sprite(4000, 4000, 'estrella');
        estrella.setScale(0.1);
        estrella.depth = 1;
        
        //muelle
        var muelle = this.physics.add.sprite(4000, 4000, 'muelle');
        muelle.setScale(0.1);
        muelle.depth = 1;
        */


        // plataforma
        plataforma = new Plataforma(this);
        
        	// Variable para que se elija el nivel de manera aleatoria
            if (idN == 1) {
                // Fondo setas
                var fondo = this.add.image(1600, 900, 'fondo-setas');
                fondo.setScale(1.67);
                fondo.depth = -2;
            } else if(idN == 2) {
                // Fondo robots
                var fondo = this.add.image(1600, 900, 'fondo-robots');
                fondo.setScale(1.67);
                fondo.depth = -2;
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

        //mejoras de prueba
        /*
        this.physics.add.collider(estrella, plataforma.plataformas);
        var vel = this.physics.add.overlap(jugador.sprite, estrella, power, null, this);
        var vel = this.physics.add.overlap(jugador2.sprite, estrella, power2, null, this);
        
        this.physics.add.collider(muelle, plataforma.plataformas);
        var salto = this.physics.add.overlap(jugador.sprite, muelle, powersalto, null, this);
        var salto = this.physics.add.overlap(jugador2.sprite, muelle, powersalto2, null, this);
        */

        //PowerUps a partir de la semilla
        Phaser.Math.RND.sow([semilla]);
        for (var i = 0; i < 10; i++) {
            alturaEX = Math.floor(Phaser.Math.RND.integerInRange(0,100) * (30 - 4) + 400);
            alturaEY = Math.floor(Phaser.Math.RND.integerInRange(0,100) * (15 - 4) + 400);
            if(i%2 == 0){
            	var estrella = this.physics.add.sprite(alturaEX, alturaEY, 'estrella');
                estrella.setScale(0.1);
                estrella.depth = 1;
                this.physics.add.collider(estrella, plataforma.plataformas);
                var vel = this.physics.add.overlap(jugador.sprite, estrella, power, null, this);
                var vel = this.physics.add.overlap(jugador2.sprite, estrella, power2, null, this);
            }else{
            	var muelle = this.physics.add.sprite(alturaEX, alturaEY, 'muelle');
                muelle.setScale(0.1);
                muelle.depth = 1;
            	this.physics.add.collider(muelle, plataforma.plataformas);
                var salto = this.physics.add.overlap(jugador.sprite, muelle, powersalto, null, this);
                var salto = this.physics.add.overlap(jugador2.sprite, muelle, powersalto2, null, this);
            }
        }

        musicaON = true;
        
        // Pausa
        this.input.keyboard.on('keydown-' + 'ESC', function (event) {
        	if(!isPaused) {
        		fondoPausa.setVisible(true);
        		isPaused = true;
        	} else {
        		fondoPausa.setVisible(false);
        		isPaused = false;
        	}
        }, this);

        this.input.keyboard.on('keydown-' + 'M', function (event) {
        	if(isPaused) {
        		var mensaje = {
                        otroUsuario: idJugador1,
                        codigo:404
                    };
            		stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));     
            		recarga();
            	}   
        }, this);

        //Carga de las puntuaciones del API rest
        loadpuntuaciones(function (puntuaciones) {
        	if(idJugador1&2==1){
        		puntos1 = puntuaciones[idJugador1-1].puntuacion;
            	puntos2 = puntuaciones[idJugador1].puntuacion;  
        	}
        	if(idJugador1%2==0){
        		puntos1 = puntuaciones[idJugador1-2].puntuacion;
            	puntos2 = puntuaciones[idJugador1-1].puntuacion;  
        	}
        	   	
        });
        
        //Puntuaciones en pantalla
        txt1 = escena.add.text(camera.centerX, camera.centerY - 500, puntos1, { font: '64px Arial' });
        txt1.setTint(0x20f2f5, 0x20f2f5, 0x20f2f5, 0x20f2f5);
        txt1.depth = 70;
        txt1.setScrollFactor(0, 0); 
        camera2.ignore(txt1);  
        
        txt2 = escena.add.text(camera.centerX, camera.centerY - 500, puntos2, { font: '64px Arial' });
        txt2.setTint(0xe643f3, 0xe643f3, 0xe643f3, 0xe643f3);
        txt2.depth = 70;
        txt2.setScrollFactor(0, 0); 
        camera.ignore(txt2);       
               
        primeraPartida = false; 
    }

    update() {
    	
    	if(escenaSiguiente){
    		this.scene.start('victoriaScene');
    	}
    	
        //Envio de la posicion mediante webSockets
    	if(idJugador1%2==1){
    		var posXAux=jugador.getX();
            var posYAux=jugador.getY();
            camera2.ignore(fondoPausa);
    		var mensaje = {
                    otroUsuario: idJugador1,
                    posX: posXAux,
                    posY: posYAux
                };
        	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
    	}else{
    		var posXAux=jugador2.getX();
            var posYAux=jugador2.getY();
            camera.ignore(fondoPausa);
    		var mensaje = {
                    otroUsuario: idJugador1,
                    posX: posXAux,
                    posY: posYAux
                };
        	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
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
        
        if (cambiarSalto) {
            if (jug == 1) {
                jugador.setVelocidadSalto(760);
            } else {
                if (jug == 2) {
                    jugador2.setVelocidadSalto(760);
                }
            }
            setTimeout(parar, 2000);
            cambiarSalto = false;
        }
        

        if (tiempo) {
            if (jug == 1) {
                jugador.setVelocidadHorizontal(400);
                jugador.setVelocidadSalto(380);
            } else {
                if (jug == 2) {
                    jugador2.setVelocidadHorizontal(400);
                    jugador2.setVelocidadSalto(380);
                }
            }
            tiempo = false;
        }

        // controles jugador 1
        if(idJugador1%2==1){
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

                jugador.sprite.anims.play('salto', true); 
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

                jugador2.sprite.anims.play('saltoa', true); 
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
        
        // Ganador y update de las puntuaciones en el API Rest
        if(idJugador1%2==1){
        	if ((jugador.getX() > posBanderaX - 100 && jugador.getX() < posBanderaX + 100) && (jugador.getY() > posBanderaY - 100 && jugador.getY() < posBanderaY + 100)) {
        		if(!pararJug1 && !pararJug2){
        			pararJug2=true;
            		loadpuntuaciones(function (puntuaciones) {           		
                		var auxx=puntuaciones[idJugador1-1].puntuacion + 1;
                		puntuacion1Updated = {
                        		id: idJugador1,
                        		puntuacion: auxx
                        }
                        updatePuntuacion(puntuacion1Updated);
                    });
                    idGanador = idJugador1;
                    var mensaje = {
                            otroUsuario: idJugador1,
                            codigo:666
                        };
                	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
                    //Envio de mensaje por ws para cambiar de escena
                    
                    var mensaje = {
                            otroUsuario: idJugador1,
                            codigo:770
                        };
                	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
        		}        		
            }
        }
        
        if(idJugador1%2==0){
        	if ((jugador2.getX() > posBanderaX - 100 && jugador2.getX() < posBanderaX + 100) && (jugador2.getY() > posBanderaY - 100 && jugador2.getY() < posBanderaY + 100)) {
        		if(!pararJug2 && !pararJug1){
        			pararJug1=true;
            		loadpuntuaciones(function (puntuaciones) {           		
                		var auxx=puntuaciones[idJugador1-1].puntuacion + 1;
                		puntuacion1Updated = {
                        		id: idJugador1,
                        		puntuacion: auxx
                        }
                        updatePuntuacion(puntuacion1Updated);
                    });
                    idGanador = idJugador1;
                    var mensaje = {
                            otroUsuario: idJugador1,
                            codigo:666
                        };
                	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
                    var mensaje = {
                            otroUsuario: idJugador1,
                            codigo:770
                        };
                	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
        		}        
            	
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

function powersalto(jugador, muelle) {
    muelle.disableBody(true, true);
    cambiarSalto = true;
    jug = 1;
}

function powersalto2(jugador, muelle) {
    muelle.disableBody(true, true);
    cambiarSalto = true;
    jug = 2;
}

function parar() {
    tiempo = true;
}


//Se actualiza la puntuacion en el API rest
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

//Cargar puntuaciones del API rest 
function loadpuntuaciones(callback) {
    $.ajax({
        url: '/puntuaciones'
    }).done(function (puntuaciones) {
        console.log('puntuaciones loaded: ' + JSON.stringify(puntuaciones));
        callback(puntuaciones);
    })
}

//Eliminar puntuacion del API rest
function deletePuntuaciones(puntuacionId) {
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:8080/puntuaciones/' + puntuacionId
    }).done(function (item) {
        console.log("Deleted puntuacion " + puntuacionId); 
        setTimeout(function(){recarga()},2000);
    })
}

//Control de los mensajes recibidos por ws 
function onPosReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	//Codigo 770, cambiar de escena 
	if(mensaje.codigo==770){			
		conectado2Aux=true;
		escenaSiguiente=true;
	}	
	//Mensaje por defecto sin codigo (posicion del otro jugador)
	if(mensaje.codigo==null){
		if(mensaje.otroUsuario%2==1 && idJugador1%2==0){
			jugador.setX(mensaje.posX); 
			jugador.setY(mensaje.posY);
		}
		
		if(mensaje.otroUsuario%2==0 && idJugador1%2==1){
			jugador2.setX(mensaje.posX);
			jugador2.setY(mensaje.posY);
		}
	}
	//Codigo 780, volver a jugar despues de ganar 
	if(mensaje.codigo==780){
		no=true;
		escenaV=false;
		//music.stop();
        pararJug1=false;
    	pararJug2=false;
    	escenaSiguiente=false;
    	//conectado2Aux=true;
    	setTimeout(escena.scene.start("juegoScene"), 1000); 
	}	
	//Codigo 750, recarga de la pagina 
	if(mensaje.codigo==750){
		recarga();
	}	
	
	//Codigo 405, Comprobacion de conexion
	if(mensaje.codigo==405){
		if(mensaje.otroUsuario%2==1 && idJugador1%2==0){
			conectado2Aux=true;
		}
		
		if(mensaje.otroUsuario%2==0 && idJugador1%2==1){
			conectado2Aux=true;
		}
	}
	
	//Codigo 666, gestion de las funciones de desconexion 
	if(mensaje.codigo==666){
		no=true;
	}
	//Codigo 667, gestion de las funciones de desconexion
	if(mensaje.codigo==667){
		no=false;
	}
	
	//Codigo 404, el otro jugador se ha desconectado, se eliminan puntuaciones y se vuelve al menu
	if(mensaje.codigo==404){
			if(idJugador1%2==1){
				deletePuntuaciones(idJugador1);
				deletePuntuaciones(idJugador1+1);
			}
			if(idJugador1%2==0){
				deletePuntuaciones(idJugador1);
				deletePuntuaciones(idJugador1-1);
			}	
			
	}
}

//Funciones para el control de la desconexion 
function estaConectado(){
	//if(!no){
		var mensaje = {
	            otroUsuario: idJugador1,
	            codigo:405
	        };
		stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));	
	//}		
}

function dispararTemporizador(){
	setInterval(function(){comprobarConexion()},5000);
} 

function comprobarConexion(){
	if(!no){
		if(!conectado2Aux){
			var mensaje = {
		            otroUsuario: idJugador1,
		            codigo:404
		        };
			stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
		}else{
			conectado2Aux=false;
		}
	}
		
}

function ponerNo(){
	var mensaje = {
            otroUsuario: idJugador1,
            codigo:667
        };
	stompClient.send("/app/pos"+sala+".send", {}, JSON.stringify(mensaje));
}

