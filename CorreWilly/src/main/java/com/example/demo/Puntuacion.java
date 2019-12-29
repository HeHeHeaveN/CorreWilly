package com.example.demo;

public class Puntuacion {

	private long id;
	private int puntuacion;
	//private boolean checked;

	public Puntuacion() {
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(int puntuacion) {
		this.puntuacion = puntuacion;
	}


	@Override
	public String toString() {
		return "Puntuacion [id=" + id + ", puntuacion=" + puntuacion + "]";
	}

}
