basic.forever(function () {
    serial.writeValue("Température", input.temperature())
    serial.writeValue("Luminosité", input.lightLevel())
    basic.pause(1000)
})
