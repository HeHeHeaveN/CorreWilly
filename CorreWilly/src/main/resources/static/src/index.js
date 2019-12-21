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
            debug: false
        }
    },

    autoRound: false,

    scene: [boot, preload, menuP,lobby, juego,victoria, Controles, Creditos, Pausa]

};

var game = new Phaser.Game(config);


