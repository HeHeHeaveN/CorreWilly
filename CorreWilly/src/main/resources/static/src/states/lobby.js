var clientes;

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
		
		var conexion= new WebSocket('ws://127.0.0.1:8080/mensajesws'); 
		
		conexion.onopen=function(){
			conexion.send('Jugador conectado');										
		}
		conexion.onmessage=function(msg){
			$('#chat').append('<p>'+msg.data+'</p>');
		}
		
    }
    
    update(){
    	
    }
}