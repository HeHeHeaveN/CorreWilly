var config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
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

    scene: [boot, preload, menuP, juego, victoria1, victoria2]

};

var game = new Phaser.Game(config);
