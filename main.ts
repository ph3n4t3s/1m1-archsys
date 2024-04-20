basic.forever(function () {
    serial.writeValue("température", input.temperature())
    serial.writeValue("luminosité", input.lightLevel())
    basic.pause(1000)
})
