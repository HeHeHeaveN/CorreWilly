# Corre Willy, corre
Introducción:
Este documento especifica el diseño y mecánicas del videojuego “Corre Willy, corre”. En él están recogidos todos sus requisitos y especificaciones, así como su funcionamiento. El documento está orientado para servir de guía a los desarrolladores del videojuego.

# Concepto:
Varios jugadores compiten por llegar antes a la bandera en un videojuego de plataformas 2d. Estos pueden interactuar entre ellos durante la partida mediante físicas y otras mecánicas que serán especificadas más adelante.

# Gameplay:
Para iniciar el juego se ha de buscar partida con otro jugador. Una vez pasado este proceso los jugadores aparecerán en la línea de salida, con los controles desactivados. Aparecerá una cuenta a atrás en la que sonará una musiquita que indicará el comienzo de la carrera. Ambos jugadores tendrán que llegar hasta la bandera del nivel, para ello tendrán que cruzar saltando por las diferentes plataformas. El primero que llega a la bandera gana. Después de esto los jugadores podrán elegir tener una revancha o abandonar la partida y jugar contra otro contrincante. Cada vez que un jugador gane aumentará su puntuación para así llevar un recuento de las victorias en la partida.
Mecánicas de juego:
En cuanto a los controles el jugador podrá moverse a izquierda y derecha y saltar. Por otro lado, el jugador podrá recoger diferentes objetos que tendrán efectos diversos en los jugadores.
Objetos:
Estrella: multiplica la velocidad del jugador *2 durante 2 segundos.
Caracol: divide la velocidad del contrario /2 durante 2 segundos.
Muelle: multiplica la altura de salto *2 durante 4 segundos.
Tele rota: Deja la pantalla del contrincante en negro durante 1 segundo.
Interrogación: Aplica un efecto aleatorio sobre cualquiera de los jugadores.

# Gráficos:
El juego es 2d, con una estética de dibujos animados. Según el nivel la estética cambia de forma aleatoria entre un mundo estilo pradera y un segundo mundo estilo mundo robótico.

# Controles:
El juego se controla por teclado con las siguientes teclas:
a/<-: Movimiento a la izquierda.
d/->: Movimiento a la derecha.
w/espacio: salto.

# Plataforma de desarrollo software:
Visual Studio code

# Plataforma de destino:
Navegador web.
