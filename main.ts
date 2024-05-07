function LectureCapteurs () {
    basic.showIcon(IconNames.SmallDiamond)
    dht11_dht22.queryData(
    DHTtype.DHT11,
    DigitalPin.P0,
    true,
    false,
    true
    )
    mesure_temp = dht11_dht22.readData(dataType.temperature)
    mesure_hum = dht11_dht22.readData(dataType.humidity)
}
function EnvoieDonnees () {
    basic.showIcon(IconNames.SmallSquare)
    serial.writeValue("humidite", mesure_hum)
    radio.sendValue("humidite", mesure_hum)
    serial.writeValue("temperature", mesure_temp)
    radio.sendValue("temperature", mesure_temp)
}
let mesure_hum = 0
let mesure_temp = 0
radio.setGroup(10)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    LectureCapteurs()
    EnvoieDonnees()
})
