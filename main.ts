effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 4 . . . . . . . 
    . . . . . . . . d . . . . . . . 
    . . . . . . . . d . . . . . . . 
    . . . . . . . e d e . . . . . . 
    . . . . . . . e d e . . . . . . 
    . . . . . . . 7 7 7 . . . . . . 
    . . . . . . e 9 9 9 e . . . . . 
    . . . . . . e e e e e . . . . . 
    . . . . . . e c c c e . . . . . 
    . . . . . . a a a a a . . . . . 
    . . . . . . 3 3 3 3 3 . . . . . 
    . . . . . 3 3 3 3 3 3 3 . . . . 
    . . . 3 3 3 . . . . . 3 3 3 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setStayInScreen(true)
