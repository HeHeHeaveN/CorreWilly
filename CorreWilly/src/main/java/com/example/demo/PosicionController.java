package com.example.demo;

import org.springframework.context.event.EventListener;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;

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
	
	
	@MessageMapping("/pos5.register")
	@SendTo("/posiciones5/public")
	public Posicion registrar5(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos5.send")
	@SendTo("/posiciones5/public")
	public Posicion mandarMensaje5(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos7.register")
	@SendTo("/posiciones7/public")
	public Posicion registrar7(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos7.send")
	@SendTo("/posiciones7/public")
	public Posicion mandarMensaje7(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos9.register")
	@SendTo("/posiciones9/public")
	public Posicion registrar9(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos9.send")
	@SendTo("/posiciones9/public")
	public Posicion mandarMensaje9(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos11.register")
	@SendTo("/posiciones11/public")
	public Posicion registrar11(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos11.send")
	@SendTo("/posiciones11/public")
	public Posicion mandarMensaje11(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos13.register")
	@SendTo("/posiciones13/public")
	public Posicion registrar13(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos13.send")
	@SendTo("/posiciones13/public")
	public Posicion mandarMensaje13(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos15.register")
	@SendTo("/posiciones15/public")
	public Posicion registrar15(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos15.send")
	@SendTo("/posiciones15/public")
	public Posicion mandarMensaje15(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos17.register")
	@SendTo("/posiciones17/public")
	public Posicion registrar17(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos17.send")
	@SendTo("/posiciones17/public")
	public Posicion mandarMensaje17(@Payload Posicion pos) {
		return pos;
	}
	
	
	@MessageMapping("/pos19.register")
	@SendTo("/posiciones19/public")
	public Posicion registrar19(@Payload Posicion pos, SimpMessageHeaderAccessor headerAccessor) {
		headerAccessor.getSessionAttributes().put("NombreUsuario", pos.getOtroUsuario());
		return pos;
	}
	
	@MessageMapping("/pos19.send")
	@SendTo("/posiciones19/public")
	public Posicion mandarMensaje19(@Payload Posicion pos) {
		return pos;
	}
}
