package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class PosicionController {
	
	@MessageMapping("/pos.register")
	@SendTo("/posiciones/public")
	public Posicion registrar(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos.send")
	@SendTo("/posiciones/public")
	public Posicion mandarMensaje(@Payload Posicion pos) {
		return pos;
	}
}
