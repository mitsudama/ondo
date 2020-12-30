basic.forever(function () {
    if (input.temperature() > 30) {
        music.playMelody("C - C - D - D - ", 120)
        music.playMelody("E - E - F C - C ", 120)
        music.playMelody("E - E C - C - C ", 120)
    } else {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            . . . . .
            # . # . #
            `)
    }
})
