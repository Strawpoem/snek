def on_gesture_logo_up():
    sprite.change(LedSpriteProperty.Y, 1)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_logo_touched():
    sprite.change(LedSpriteProperty.Y, -1)
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_button_pressed_a():
    sprite.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_down():
    sprite.change(LedSpriteProperty.Y, -1)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

def on_button_pressed_b():
    sprite.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
sprite = game.create_sprite(2, 2)
apple = game.create_sprite()


def on_forever():
    pass
basic.forever(on_forever)
