class juego extends Phaser.Scene {
    constructor() {
        super("juegoScene");

    }

    preload() {

    }

    create() {

        cursors = this.input.keyboard.createCursorKeys();

        w = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        a = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        d = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

        /*
        this.cursors = this.input.keyboard.addKeys(
            {
                up: Phaser.Input.Keyboard.KeyCodes.W,
                down: Phaser.Input.Keyboard.KeyCodes.S,
                left: Phaser.Input.Keyboard.KeyCodes.A,
                right: Phaser.Input.Keyboard.KeyCodes.D
            });
            */

        //animaciones
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 10, end: 19 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: -1
        });

        this.anims.create({
            key: 'salto',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 0, end: 9 }),
            frameRate: 12,
            repeat: 0
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('spriteSheerJugador', { start: 20, end: 29 }),
            frameRate: 12,
            repeat: -1
        });

        this.add.image(800, 450, 'fondo');

        //Jugador 1
        jugador = new Jugador(this, 100, 100);
        jugador.sprite.setBounce(0.1);


        //Jugador 2
        jugador2 = new Jugador(this, 300, 300);

        jugador.sprite.anims.play('turn', true);

    }

    update() {

        //controles jugador 1

        if (cursors.left.isDown) {
            jugador.sprite.setVelocityX(-400);

            jugador.sprite.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            jugador.sprite.setVelocityX(400);

            jugador.sprite.anims.play('right', true);
            //en caso de usar sprites de un solo sentido
            //jugador.sprite.flipX= true;
        }
        else {
            jugador.sprite.setVelocityX(0);

            jugador.sprite.anims.play('turn', true);
        }

        if (cursors.up.isDown && jugador.sprite.body.touching.down) {
            jugador.sprite.setVelocityY(-500);

            jugador.sprite.anims.play('salto', true); //Ajustar con los sprites
        }

        //contrloes jugador 2

        if (Phaser.Input.Keyboard.JustDown(a)) {
            jugador2.sprite.setVelocityX(-400);

            jugador2.sprite.anims.play('left', true);
        }
        else if (Phaser.Input.Keyboard.JustDown(d)) {
            jugador2.sprite.setVelocityX(400);

            jugador2.sprite.anims.play('right', true);
        }
        else {
            jugador2.sprite.setVelocityX(0);

            jugador2.sprite.anims.play('turn', true);
        }

        if (Phaser.Input.Keyboard.JustDown(w) && jugador.sprite.body.touching.down) {
            jugador2.sprite.setVelocityY(-500);

            jugador2.sprite.anims.play('salto', true); //Ajustar con los sprites
        }
    }
}

var jugador;
var jugador2;
var cursors;
var a, d, w;