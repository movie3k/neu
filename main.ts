let abstand = 0
basic.forever(function () {
    abstand = 100
    if (input.buttonIsPressed(Button.A)) {
        abstand += grove.measureInCentimeters(DigitalPin.C16)
        if (abstand < 30) {
            music.playMelody("C5 A C5 A C5 A - - ", 120)
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
            basic.showNumber(abstand)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    } else {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(200)
    }
})
