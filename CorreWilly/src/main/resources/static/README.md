# Corre Willy, corre
Introducción:
Este documento especifica el diseño y mecánicas del videojuego “Corre Willy, corre”. En él están recogidos todos sus requisitos y especificaciones, así como su funcionamiento. El documento está orientado para servir de guía a los desarrolladores del videojuego.

# Concepto:
Varios jugadores compiten por llegar antes a la bandera en un videojuego de plataformas 2d. Estos pueden interactuar entre ellos durante la partida mediante físicas y otras mecánicas que serán especificadas más adelante.

# Público objetivo
Este juego esta orientado al publico general, ya que sus mecánicas son sencillas y se requiere de poco tiempo para jugar una partida.

# Gameplay:
Para iniciar el juego se ha de buscar partida con otro jugador. Una vez pasado este proceso los jugadores aparecerán en la línea de salida, con los controles desactivados. Aparecerá una cuenta a atrás en la que sonará una musiquita que indicará el comienzo de la carrera. Ambos jugadores tendrán que llegar hasta la bandera del nivel, para ello tendrán que cruzar saltando por las diferentes plataformas. El primero que llega a la bandera gana. Después de esto los jugadores podrán elegir tener una revancha o abandonar la partida y jugar contra otro contrincante. Cada vez que un jugador gane aumentará su puntuación para así llevar un recuento de las victorias en la partida.
Mecánicas de juego:
En cuanto a los controles el jugador podrá moverse a izquierda y derecha y saltar. Por otro lado, el jugador podrá recoger diferentes objetos que tendrán efectos diversos en los jugadores.
## Objetos:
- Estrella: multiplica la velocidad del jugador *2 durante 2 segundos.
- Caracol: divide la velocidad del contrario /2 durante 2 segundos.
- Muelle: multiplica la altura de salto *2 durante 4 segundos.
- X: Deja la pantalla del contrincante en negro durante 1 segundo.
- Interrogación: Aplica un efecto aleatorio sobre cualquiera de los jugadores.

# Gráficos:
El juego es 2d, que presenta una mezcla entre animación clásica y gráficos generados por ordenador prerrenderizados. Según el nivel la estética cambia de forma aleatoria entre un mundo estilo pradera y un segundo mundo estilo mundo robótico.

<img src="Imágenes prototipo/Prototipo gráficos.png">
<img src="Imágenes prototipo/Prototipo personaje.png">
<p><img src="Imágenes prototipo/Caracola.png" width = "300"> 
<img src="Imágenes prototipo/Interrogación.png" width = "300">
<img src="Imágenes prototipo/estrella.png" width = "300">
<img src="Imágenes prototipo/muelle.png" width = "300">
<img src="Imágenes prototipo/x.png" width = "300"><p>


# Controles:
El juego se controla por teclado con las siguientes teclas:
- a/<-: Movimiento a la izquierda.
- d/->: Movimiento a la derecha.
- w/espacio: salto.

# Plataforma de desarrollo software:
Visual Studio code utilizando el Framework Phaser 3. Además, un tablero de Trello para la organización de las tareas del equipo https://trello.com/b/343sUw52/corre-willy-corre, y un proyecto de Github https://github.com/HeHeHeaveN/CorreWilly.

# Plataforma de destino:
Navegador web.

# Desarrollo:
## Pantalla de inicio:
Nos aparece al cargar la página web. Desde aquí podemos iniciar el juego, ver las reglas del mismo, o ver los desarrolladores del proyecto.
<img src="Imágenes prototipo/Inicio.PNG">
<p><img src="Imágenes prototipo/Como_jugar.png" width = "400"> 
<img src="Imágenes prototipo/Creditos.png" width = "400"><p>

## Pantalla de juego:
Al iniciar el jugo se generan las plataformas y los power ups del nivel de forma aleatoria. Nuestro objetivo será llegar a la bandera antes que él contrario. Si nos caemos volveremos a empezar el nivel.
<img src="Imágenes prototipo/Juego.PNG">

## Pantalla de victoria:
Nos indica que jugador ha ganado. Pasado unos segundos nos devuelve a la pantalla de inicio.
<img src="Imágenes prototipo/Victoria.PNG">

## Diagrama de navegación:
<img src="Imágenes prototipo/diagrama navegación.png">

# Integrantes del grupo:
- Enrique Corrochano Pardo. Correo: e.corrochano.2017@alumnos.urjc.es Github: https://github.com/enriqueyr12
- Andrés González Pérez. Correo: an.gonzalez.2017@alumnos.urjc.es Github: https://github.com/HeHeHeaveN
- Darío Muñoz Rostami. Correo: d.munozr.2017@alumnos.urjc.es Github: https://github.com/dario-bit
- Víctor Sanz Valenzuela. Correo: v.sanzv.2017@alumnos.urjc.es Github: https://github.com/VictorSanzV  
*Este documento está sujeto a cambios.
