let u = 0
basic.forever(function () {
    u = maqueen.Ultrasonic(PingUnit.Centimeters)
    basic.showNumber(u)
    basic.pause(1000)
    basic.showIcon(IconNames.LeftTriangle)
})
