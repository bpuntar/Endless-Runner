class Play extends Phaser.Scene {
    constructor() {
        super("playScene")
    }

    init() {
        //variables と settings
        this.physics.world.gravity.y = 2600
        this.JUMP_VELOCITY = -800
        this.MAX_JUMPS = 3
    }

    create() {

        //place tile sprite
        this.blue = this.add.tileSprite(0, 0, 640, 480, 'blue').setOrigin(0,0)


        // ground tiles group //wip
        this.ground = this.add.group()
        for(let i = 0; i < game.config.width; i += tileSize) {
            let groundTile = this.physics.add.sprite(i, game.config.height - tileSize, 'platformer_atlas', 'block').setScale(SCALE).setOrigin(0)
            groundTile.body.immovable = true
            groundTile.body.allowGravity = false
            this.ground.add(groundTile)
        }

        //cursor key input
        cursors = this.input.keyboard.createCursorKeys()

        // tile above ground tiles
        this.groundScroll = this.add.tileSprite(0, game.config.height-tileSize, game.config.width, tileSize, 'groundScroll').setOrigin(0)

        // add Player sprite 
        this.guy = this.physics.add.sprite(120, game.config.height/2-tileSize, 'player').setScale(SCALE)

        // add physics collider
        this.physics.add.collider(this.guy, this.ground)
    }

    update() {

        //scrolling tile sprite speed
        this.blue.tilePositionX += 4

		// check if alien is grounded
	    this.guy.isGrounded = this.guy.body.touching.down
	    // if so, we have jumps to spare
	    if(this.guy.isGrounded) {
	    	this.jumps = this.MAX_JUMPS
	    	this.jumping = false


        // allow steady velocity change up to a certain key down duration
        // see: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.html#.DownDuration__anchor
            if(this.jumps > 0 && Phaser.Input.Keyboard.DownDuration(cursors.up, 150)) {
                this.guy.body.velocity.y = this.JUMP_VELOCITY
                this.jumping = true
	    }
        // finally, letting go of the UP key subtracts a jump
        // see: https://photonstorm.github.io/phaser3-docs/Phaser.Input.Keyboard.html#.UpDuration__anchor
            if(this.jumping && Phaser.Input.Keyboard.UpDuration(cursors.up)) {
                this.jumps--
                this.jumping = false
	        }
        }
    }
}