input.onButtonPressed(Button.A, function () {
    if (randint(0, 2) == "0") {
        basic.showString("1")
        basic.pause(200)
    } else if (randint(0, 2) == "2") {
        basic.showString("3")
        basic.pause(200)
    } else {
        basic.showString("2")
        basic.pause(200)
    }
})
basic.showString("Hello!")
basic.forever(function () {
	
})
