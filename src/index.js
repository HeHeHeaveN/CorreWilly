var config = {
    type: Phaser.WEBGL,
    width: 3200,
    height: 1800,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: true
        }
    },

    autoRound: false,

    scene: [boot, preload, menuP, juego, victoria1, victoria2, Controles, Creditos, Pausa]

};

var game = new Phaser.Game(config);
