class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");

    }

    preload() {

    }

    create() {

        cursors = this.input.keyboard.createCursorKeys();

        //animaciones
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 1, end: 10 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'spriteSheerJugador', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 20, end: 30 }),
            frameRate: 10,
            repeat: -1
        });

        this.add.image(800, 450, 'fondo');

        //Jugador 1
        jugador = new Jugador(this, 100, 100);
        jugador.sprite.setBounce(0.1);


        //Jugador 2
        jugador2 = new Jugador(this, 300, 300);

    }

    update() {

        //controles

        if (cursors.left.isDown) {
            jugador.sprite.setVelocityX(-400);

            jugador.sprite.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            jugador.sprite.setVelocityX(400);

            jugador.sprite.anims.play('right', true);
        }
        else {
            jugador.sprite.setVelocityX(0);

            jugador.sprite.anims.play('turn');
        }

        if (cursors.up.isDown && jugador.sprite.body.touching.down)
        {
            jugador.sprite.setVelocityY(-500);
        }

    }
}

var jugador;
var jugador2;
var cursors;