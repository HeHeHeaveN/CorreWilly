package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
	
	@MessageMapping("/chat.register")
	@SendTo("/chatLobby/public")
	public Mensaje registrar(@Payload Mensaje mensaje, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", mensaje.getOtroUsuario());
		return mensaje;
	}
	
	@MessageMapping("/chat.send")
	@SendTo("/chatLobby/public")
	public Mensaje mandarMensaje(@Payload Mensaje mensaje) {
		return mensaje;
	}
}
