var mainState = {
  preload: function () {
    game.load.image('player', 'assets/player.png')
    game.load.image('wallH', 'assets/wallHorizontal.png')
    game.load.image('wallV', 'assets/wallVertical.png')

  },

  create: function () {
    game.stage.backgroundColor = '#3498db'

    this.player = new Player(game, 250, 170)
    game.add.existing(this.player)

    this.createWorld()
  },

  createWorld: function () {
    this.walls = game.add.group()

    this.walls.enableBody = true

    game.add.sprite(0, 0, 'wallV', 0, this.walls)
    game.add.sprite(480, 0, 'wallV', 0, this.walls)

    game.add.sprite(0, 0, 'wallH', 0, this.walls)
    game.add.sprite(300, 0, 'wallH', 0, this.walls)

    game.add.sprite(0, 320, 'wallH', 0, this.walls)
    game.add.sprite(300, 320, 'wallH', 0, this.walls)

    game.add.sprite(-100, 160, 'wallH', 0, this.walls)
    game.add.sprite(400, 160, 'wallH', 0, this.walls)

    var middleTop = game.add.sprite(100, 80, 'wallH', 0, this.walls)
    middleTop.scale.setTo(1.5, 1)
    var middleBottom = game.add.sprite(100, 240, 'wallH', 0, this.walls)
    middleBottom.scale.setTo(1.5, 1)

    this.walls.setAll('body.immovable', true)

  },

  update: function () {
    game.physics.arcade.collide(this.player, this.walls)

    if (!this.player.inWorld) {
      this.player.kill()
    }
  }
}

var game = new Phaser.Game(500, 340, Phaser.AUTO, 'gameDiv')

game.state.add('main', mainState)

game.state.start('main')
