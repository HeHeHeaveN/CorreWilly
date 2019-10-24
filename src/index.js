var config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'matter',
        matter: {
            gravity: { y: 1 },
            enableSleep: false
        }
    },

    autoRound: false,

    scene: [boot, preload, juego]

};

var game = new Phaser.Game(config);