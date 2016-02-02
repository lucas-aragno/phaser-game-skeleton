var Player = function (game, x, y, frame) {
  Phaser.Sprite.call(this, game, x, y, 'player', frame)
  this.anchor.setTo(0.5, 0.5)
  game.physics.arcade.enableBody(this)
  this.game = game
  this.body.gravity.y = 500
  this.cursor = game.input.keyboard.createCursorKeys()

  this.events.onKilled.add(this.onKilled, this)
}

Player.prototype = Object.create(Phaser.Sprite.prototype)

Player.prototype.constructor = Player

Player.prototype.update = function () {
  if (this.cursor.left.isDown) {
    this.body.velocity.x = -200
  }

  else if (this.cursor.right.isDown) {
    this.body.velocity.x = 200
  } else {
    this.body.velocity.x = 0
  }

  if (this.cursor.up.isDown && this.body.touching.down) {
    this.body.velocity.y = -320
  }
}

Player.prototype.onKilled = function () {
  console.log('dead')
  this.game.state.start('main')
}
