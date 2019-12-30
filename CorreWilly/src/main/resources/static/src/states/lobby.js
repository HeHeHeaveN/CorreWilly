var stompClient=null;

var jugar=false;

var conectado=false;
var conectado2=false;

var habilitarJugar=false;

var semilla; 
var idN;

class lobby extends Phaser.Scene {
    constructor() {
        super("lobbyScene");
    }

    preload() {
        // fondo
        this.load.image('menu', 'assets/Menu_inicio.png');

    }

    create(){
    	 // Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(1.67);
        fondo.depth = -2;
        
  		// Mostramos ciertos elementos HTML
		$('#chat').show();
		$('#mensajeChat').show();
		$('#enviarBoton').show();
        
        var socket = new SockJS('/mensajes')
        stompClient=Stomp.over(socket);
        stompClient.connect({},onConnected,onError);
    }
    
    update(){
    	if(jugar){
    		this.scene.start('juegoScene');
    	}
    	var mensaje = {
                otroUsuario: idJugador1,
                codigo: 500
            };
    	if(conectado){
    		stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
    	}    	
    	if(conectado2){
    		if(!habilitarJugar){
    			var mensaje = {
    	                otroUsuario: idJugador1,
    	                codigo: 510
    	            };
    	    	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
    	    	habilitarJugar=true;
    		}
    	}
    }
    
    
}

function onError(error) {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
}

function onConnected(){
	stompClient.subscribe('/chatLobby/public',onMessageReceived); 
	stompClient.send("/app/chat.register",{},idJugador1);	
	setTimeout(entradaJugador,1000);	
}
$(document).ready(function (){
	
$("#enviarBoton").click(function () {
	
	var input=$('#mensajeChat');
	
	var mensaje = {
            otroUsuario: idJugador1,
            contenido: input.val()
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
});

$("#botonJugar").click(function () {	
	var mensaje = {
            otroUsuario: idJugador1,
            codigo: 574
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
});

});



function onMessageReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	
	if(mensaje.codigo==574 && (idJugador1==1 || idJugador1==2)){		
		if(idJugador1==1 || idJugador1==2){
			if(mensaje.otroUsuario==1 && idJugador1==2){
				var mensaje = {
			            otroUsuario: idJugador1,
			            codigo: 550,
			        };
				stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
			}
			if(mensaje.otroUsuario==2 && idJugador1==1){
				var mensaje = {
			            otroUsuario: idJugador1,
			            codigo: 550,
			        };
				stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
			}
			if(mensaje.otroUsuario==idJugador1){
				idN=Math.floor(Math.random() * (3 - 1) + 1);
				semilla= Phaser.Math.RND.integerInRange(400,800);
				
				var mensaje = {
			            otroUsuario: idJugador1,
			            codigo: 550,
			            aux1:idN,
			            aux2:semilla
			        };
				stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
			}
					
		}
	}
	
	if(mensaje.codigo==550){
		if((mensaje.otroUsuario==1 && idJugador1==2) || (mensaje.otroUsuario==2 && idJugador1==1)){
			idN=mensaje.aux1; 
			semilla=mensaje.aux2;
		}		
		var mensaje = {
	            otroUsuario: idJugador1,
	            codigo: 560,
	        };
		stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
	}
	
	
	if(mensaje.codigo==560){
		$('#chat').hide();
		$('#mensajeChat').hide();
		$('#enviarBoton').hide();
		$('#botonJugar').hide();
		stompClient.subscribe('/posiciones/public',onPosReceived); 
		stompClient.send("/app/pos.register",{},idJugador1);
		jugar=true;
	}
	
	if(mensaje.codigo==500){
		if(idJugador1==1 && mensaje.otroUsuario==2){
			conectado2=true;
		}
		if(idJugador1==2 && mensaje.otroUsuario==1){
			conectado2=true;
		}
	}
	
	if(mensaje.codigo==null){
		$('#chat').append('<p>'+mensaje.contenido+'</p>');
	}

	if(mensaje.codigo==510){
		$('#botonJugar').show();
	}
	
}

function entradaJugador(){
	var aux; 
	aux="Jugador Conectado!";
	conectado=true;
	var mensaje = {
            otroUsuario: idJugador1,
            contenido: aux
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
}

