package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@SpringBootApplication
@EnableWebSocket
public class CorreWillyApplication implements WebSocketConfigurer{

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
		registry.addHandler(textHandler(),"/mensajesws").setAllowedOrigins("*");
	}
	
	@Bean 
	public WebsocketTextHandler textHandler() {
		return new WebsocketTextHandler();
	}
	
	public static void main(String[] args) {
		SpringApplication.run(CorreWillyApplication.class, args);
	}

}
