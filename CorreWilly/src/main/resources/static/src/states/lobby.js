var stompClient=null;

var jugar=false;

class lobby extends Phaser.Scene {
    constructor() {
        super("lobbyScene");
    }

    preload() {
        //fondo
        this.load.image('menu', 'assets/Menu_inicio.png');

    }

    create(){
    	 //Fondo
        var fondo = this.add.image(1600, 900, 'menu')
        fondo.setScale(1.67);
        fondo.depth = -2;
        
  		//Mostramos ciertos elementos HTML
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
	
	//574=Codigo para empezar a jugar
	var contMensaje=574;
	
	var mensaje = {
            otroUsuario: idJugador1,
            contenido: contMensaje
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));

});

});



function onMessageReceived(payload){
	var mensaje=JSON.parse(payload.body); 
	
	if(mensaje.contenido==574 && (idJugador1==1 || idJugador1==2)){
		$('#chat').hide();
		$('#mensajeChat').hide();
		$('#enviarBoton').hide();
		$('#botonJugar').hide();
		if(idJugador1==1 || idJugador1==2){
			stompClient.subscribe('/posiciones/public',onPosReceived); 
			stompClient.send("/app/pos.register",{},idJugador1);
		}
		jugar=true;
	}else{
		$('#chat').append('<p>'+mensaje.contenido+'</p>');
	}
	if(mensaje.otroUsuario%2==0){
		$('#botonJugar').show();
	}
}

function entradaJugador(){
	var aux; 
	aux="Jugador Conectado!";
	var mensaje = {
            otroUsuario: idJugador1,
            contenido: aux
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
}

