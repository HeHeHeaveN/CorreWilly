var config = {
    type: Phaser.WEBGL,
    width: 1600,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    physics: {
        default: 'impact',
        impact: {
            gravity: 1500,
            debug: false
        }
    },

    autoRound: false,

    scene: [boot, preload, juego]

};

var game = new Phaser.Game(config);