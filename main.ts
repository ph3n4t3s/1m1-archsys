serial.writeLine(timeanddate.dateTime())
basic.forever(function () {
    serial.writeLine(timeanddate.time(timeanddate.TimeFormat.HHMMSS24hr))
    serial.writeValue("temperature", input.temperature())
    serial.writeValue("luminosite", input.lightLevel())
    basic.pause(1000)
})
