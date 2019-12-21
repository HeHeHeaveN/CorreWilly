package com.example.demo;

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

public class WebsocketTextHandler extends TextWebSocketHandler {
	
	@Override 
	protected void handleTextMessage(WebSocketSession sesion, TextMessage mensaje)throws Exception{		
		sesion.sendMessage(mensaje);
	}
	
}
