basic.forever(function () {
    serial.writeValue("temp", input.temperature())
    serial.writeValue("lum", input.lightLevel())
    basic.pause(1000)
})
