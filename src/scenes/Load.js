class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.path = 'assets/'

        this.load.image('groundScroll', 'ground.png')
    }
}