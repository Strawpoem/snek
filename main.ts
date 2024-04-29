input.onLogoEvent(TouchButtonEvent.Touched, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.A, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
let apple = game.createSprite(randint(0, 5), randint(0, 5))
let countdown = 5
loops.everyInterval(1000, function () {
    countdown += -1
    music.play(music.tonePlayable(131, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    if (countdown == 0) {
        music.setBuiltInSpeakerEnabled(false)
        basic.showString("" + (game.score()))
        game.gameOver()
    }
})
basic.forever(function () {
    if (sprite.isTouching(apple)) {
        game.addScore(1)
        apple.set(LedSpriteProperty.Y, randint(0, 5))
        apple.set(LedSpriteProperty.X, randint(0, 5))
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        countdown = 5
    }
})
