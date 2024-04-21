basic.forever(function () {
    serial.writeValue("D Out", pins.digitalReadPin(DigitalPin.P0))
    serial.writeValue("A Out", pins.analogReadPin(AnalogPin.P0))
    basic.pause(100)
})
