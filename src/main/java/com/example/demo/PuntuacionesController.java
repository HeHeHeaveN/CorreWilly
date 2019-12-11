package com.example.demo;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/puntuaciones")
public class PuntuacionesController {

	Map<Long, Puntuacion> puntuaciones = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<Puntuacion> puntuaciones() {
		return puntuaciones.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Puntuacion nuevoPuntuacion(@RequestBody Puntuacion puntuacion) {

		long id = nextId.incrementAndGet();
		puntuacion.setId(id);
		puntuaciones.put(id, puntuacion);

		return puntuacion;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Puntuacion> actulizaPuntuacion(@PathVariable long id, @RequestBody Puntuacion puntuacionActualizado) {

		Puntuacion savedPuntuacion = puntuaciones.get(puntuacionActualizado.getId());

		if (savedPuntuacion != null) {

			puntuaciones.put(id, puntuacionActualizado);

			return new ResponseEntity<>(puntuacionActualizado, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Puntuacion> getPuntuacion(@PathVariable long id) {

		Puntuacion savedPuntuacion = puntuaciones.get(id);

		if (savedPuntuacion != null) {
			return new ResponseEntity<>(savedPuntuacion, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Puntuacion> borraPuntuacion(@PathVariable long id) {

		Puntuacion savedPuntuacion = puntuaciones.get(id);

		if (savedPuntuacion != null) {
			puntuaciones.remove(savedPuntuacion.getId());
			return new ResponseEntity<>(savedPuntuacion, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
