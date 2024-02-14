// Name: Brandon Apuntar
// hours spent:
//


// global variables
let cursors
const tileSize = 35
const SCALE = 0.5

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config)

//set ui size
let borderUISize = game.config.height / 15
let borderPadding = borderUISize / 3

