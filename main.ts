basic.forever(function () {
    serial.writeValue("température", input.temperature())
    serial.writeValue("lum", input.lightLevel())
    basic.pause(1000)
})
