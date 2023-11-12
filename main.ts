led.enable(true)
basic.showString("12")
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 3; index++) {
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(3000)
    pins.digitalWritePin(DigitalPin.P2, 0)
})
