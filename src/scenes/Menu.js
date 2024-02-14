class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        //load images/tile sprites
        this.load.image('blue', './assets/blue.png')
    }

    create() {
        this.add.text(20, 20, "Endless Runner menu")
        this.scene.start("playScene")
    }
}