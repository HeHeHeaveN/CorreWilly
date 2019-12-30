package com.example.demo;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
public class PosicionController {
	
	@MessageMapping("/pos1.register")
	@SendTo("/posiciones1/public")
	public Posicion registrar(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos1.send")
	@SendTo("/posiciones1/public")
	public Posicion mandarMensaje(@Payload Posicion pos) {
		return pos;
	}
	
	@MessageMapping("/pos3.register")
	@SendTo("/posiciones3/public")
	public Posicion registrar2(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos3.send")
	@SendTo("/posiciones3/public")
	public Posicion mandarMensaje2(@Payload Posicion pos) {
		return pos;
	}
}
