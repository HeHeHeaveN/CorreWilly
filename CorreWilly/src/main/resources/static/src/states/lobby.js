var stompClient=null;

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
		/*
		var conexion= new WebSocket('ws://127.0.0.1:8080/mensajesws'); 
		
		conexion.onopen=function(){
			conexion.send('Jugador conectado');										
		}
		conexion.onmessage=function(msg){
			$('#chat').append('<p>'+msg.data+'</p>');
		}*/
        
        var socket = new SockJS('/mensajes')
        stompClient=Stomp.over(socket);
        stompClient.connect({},onConnected,onError);
		
    }
    
    update(){
    	
    }
    
    
}

function onError(error) {
    connectingElement.textContent = 'Could not connect to WebSocket server. Please refresh this page to try again!';
    connectingElement.style.color = 'red';
}

function onConnected(){
	stompClient.subscribe('/chatLobby/public',onMessageReceived); 
	stompClient.send("/app/chat.register",{},"1");
	setTimeout(entradaJugador,1000);
	
}
$(document).ready(function (){
	
$("#enviarBoton").click(function () {
	
	var input=$('#mensajeChat');
	
	var mensaje = {
            otroUsuario: 1,
            contenido: input.val()
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));
});});

function onMessageReceived(payload){
	console.log("Llega");
	var mensaje=JSON.parse(payload.body); 
	$('#chat').append('<p>'+mensaje.contenido+'</p>');
}

function entradaJugador(){
	var aux; 
	aux="Jugador Conectado!";
	var mensaje = {
            otroUsuario: 1,
            contenido: aux
        };
	stompClient.send("/app/chat.send", {}, JSON.stringify(mensaje));	
}