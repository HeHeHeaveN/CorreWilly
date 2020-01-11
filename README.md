[![CorreWilly](https://img.youtube.com/vi/wkKg8Hd2yv0/0.jpg)](https://youtu.be/wkKg8Hd2yv0)

# Links a paginas donde esta subido el juego 
https://grupojred12.itch.io/correwilly 

https://www.kongregate.com/games/grupoj/correwilly

https://www.newgrounds.com/portal/view/745933

https://www.outpan.com/app/075e08f516/correwilly

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

<img src="src/main/resources/static/Imágenes prototipo/Prototipo gráficos.png">
<img src="src/main/resources/static/Imágenes prototipo/Prototipo personaje.png">
<p><img src="src/main/resources/static/Imágenes prototipo/Caracola.png" width = "300"> 
<img src="src/main/resources/static/Imágenes prototipo/Interrogación.png" width = "300">
<img src="src/main/resources/static/Imágenes prototipo/estrella.png" width = "300">
<img src="src/main/resources/static/Imágenes prototipo/muelle.png" width = "300">
<img src="src/main/resources/static/Imágenes prototipo/x.png" width = "300"><p>


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
<img src="src/main/resources/static/Imágenes prototipo/captura_inicio.png">
<p><img src="src/main/resources/static/Imágenes prototipo/captura_como_jugar.png" width = "400"> 
<img src="src/main/resources/static/Imágenes prototipo/captura_creditos.png" width = "400">
<img src="src/main/resources/static/Imágenes prototipo/captura_lobby.png" width = "400"><p>

## Pantalla de juego:
Al iniciar el jugo se generan las plataformas y los power ups del nivel de forma aleatoria. Nuestro objetivo será llegar a la bandera antes que él contrario. Si nos caemos vol7veremos a empezar el nivel.
<img src="src/main/resources/static/Imágenes prototipo/captura_juego.png">

## Pantalla de victoria:
Nos indica que jugador ha ganado. Pasado unos segundos nos devuelve a la pantalla de inicio.
<img src="src/main/resources/static/Imágenes prototipo/captura_ganador.png">

## Diagrama de navegación:
<img src="src/main/resources/static/Imágenes prototipo/diagrama4.png">

## Diagrama de clases:
<img src="src/main/resources/static/Imágenes prototipo/diagramaClases.PNG">

## Cómo ejecutar el juego:
Desde la consola de comandos (cmd), dirigirnos a la ruta donde este nuestro servidor (en la carpeta del github está en la carpeta llamada CorreWilly dentro de la carpeta del proyecto que
también se llama CorreWilly, el archivo se llama CorreWilly-Servidor-Fase4). Una vez ubicados
en el lugar correcto, ejecutar la siguiente línea de instrucción:
java -jar CorreWilly-Servidor-Fase4.jar
Para ejecutarlo deberemos tener instalado java en nuestra máquina.
Una vez abierto el servidor, introducir en el navegador la ruta "localhost:8080" o
"127.0.0.1:8080"

## Cambios de la fase 3 en la fase 4 y funcionamiento WebSockets
Se han implementado WebSockets usando Stomp con Spring, en el lado del servidor se ha utilizado MessageBroker para poder subscribir al jugador en distintas salas
Se ha creado al principio del juego cuando el jugador le da a jugar un lobby que consiste en una sala de chat, aquí es donde se crea el Web Socket y se subscribe al “topic” (sala) del chat, en esta sala no hay máximo de jugadores, pueden entrar los que sean y hablar por el chat, esto se hace mediante WebSockets mandando mensajes, el mensaje de Web Socket consiste en el contenido del mensaje, un código y variables auxiliares por si queremos mandar una información extra. A lo largo de todo el juego usamos el código de los mensajes para mandar mensajes específicos, por ejemplo: código=480, si recibe ese mensaje se empieza el juego, si el código es null se recibe el mensaje por defecto, es decir, en la sala de chat el mensaje de texto y en el juego la posición del otro jugador
En la sala de chat cuando haya dos pares de jugadores conectados aparecerá un botón para empezar a jugar, si se hace click en ese botón empezara el juego solo para esos dos jugadores, suscribiéndoles en un topic o sala nueva para mandarse mensajes entre ellos dos solo. Se ha mencionado que el chat no tenia limite de jugadores conectados. En el juego hemos decidido poner un limite de 10 salas
Durante el juego se usan los Web Socket para multitud de cosas, la principal la posición del otro jugador, que se recibe constantemente, otras cosas en las que se utilizan son cuando un jugador gana la partida, cuando se quiere volver a jugar, etc.… También se utilizan Web Sockets para hacer una función de eco para gestionar las desconexiones, si el otro jugador se desconecta el jugador que no lo ha hecho al cabo de unos segundos (3-7 segundos) volverá al menú principal
El API Rest se utiliza para la gestión de puntuaciones y las ids únicas para cada jugador
También se han arreglado numerosos bugs, la lista especifica de estos están en los commits del GitHub, cada vez que se arreglaba uno se hacía un commit. Este es otro cambio a destacar, en la fase anterior los miembros del grupo no sabíamos cómo hacer commits en Eclipse por lo que solo hicimos uno final, en esta fase se ha investigado mas a fondo y se han realizado los commits correspondientes
Un bug que se ha arreglado ha sido el de la publicación de puntuaciones y el get de las puntuaciones en el API Rest, a veces tardaba mucho en publicarse, ahora funciona correctamente
Otro cambio ha sido el añadir un “power up” o mejora más, la del muelle, si el jugador colisiona con este saltará mas alto durante unos cuantos segundos

# Beta testing

Para la fase 5, hemos realizado unas pruebas del juego y hemos comprobado que el funcionamiento es correcto, la comunicación entre ambos usuarios se realiza de manera adecuada, la posición de ambos jugadores se comunica perfectamente a través de los websockets sin ningún tipo de retardo, aunque si no se deja tiempo suficiente para que se realice la conexión entre los dos jugadores, esto podría dar un error y sería necesario volver a buscar partida.
La estética del juego es apropiada para el tipo de juego desarrollado. Sin embargo, sí que hay problemas con las animaciones, ya que como están hechas, estas se activan al pulsar los controles, no se almacena en ningún estado, con lo que no tiene fácil arreglo.

La jugabilidad es fluida y adecuada a un juego de plataformas con distintos power-ups, aunque se echa en falta que hubiera alguno más. Aunque hay que decir que, sí que se ha incluido uno más en la anterior fase de desarrollo, pero no llega al objetivo inicial. Los dos escenarios mantienen una estética similar y aportan algo de variedad al juego, lo que se agradece, y que si se pudiera seria perfecto añadir nuevos diseños que aumentaran esta heterogeneidad. No hemos apreciado ningún glitch que pueda afectar a la jugabilidad de forma catastrófica.

Se ha observado que el rendimiento del juego no es el mejor y llega a ralentizarse en algunos momentos. Parece que los problemas los pueden estar causando algunas funciones poco optimizadas, pero sobre todo la comunicación, ya que se mandan una cantidad de mensajes muy elevada, lo que parece estar consumiendo muchos recursos.

En cuanto a la jugabilidad hay que decir que, aunque es efectiva y en un principio puedes divertirte con sus mecánicas al cabo de una rato resulta repetitiva. La generación aleatoria de los niveles ayuda a disimular esta falta de variedad, pero hay que decir que al final todos estos no son lo suficientemente diferentes como para resultar únicos, haciendo que el cambio sea escaso.

Respecto a las mejoras que se podrían realizar tras este análisis más a fondo de nuestro, se podrían agregar más variedad power-ups, que se podrían implementar sin mayores complicaciones y también sería posible aumentar el número de escenarios, y de esta forma hacer que sea menos monótono el gameplay. Además de mejorar el rendimiento y arreglar los problemas con las animaciones.

# Integrantes del grupo:
- Enrique Corrochano Pardo. Correo: e.corrochano.2017@alumnos.urjc.es Github: https://github.com/enriqueyr12
- Andrés González Pérez. Correo: an.gonzalez.2017@alumnos.urjc.es Github: https://github.com/HeHeHeaveN
- Darío Muñoz Rostami. Correo: d.munozr.2017@alumnos.urjc.es Github: https://github.com/dario-bit
- Víctor Sanz Valenzuela. Correo: v.sanzv.2017@alumnos.urjc.es Github: https://github.com/VictorSanzV  
*Este documento está sujeto a cambios.
