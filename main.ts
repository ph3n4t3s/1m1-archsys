function LectureCapteurs () {
    basic.showIcon(IconNames.SmallDiamond)
    mesure_D_Out = pins.digitalReadPin(DigitalPin.P0)
    mesure_A_Out = pins.analogReadPin(AnalogPin.P1)
}
function EnvoieDonnees () {
    basic.showIcon(IconNames.SmallSquare)
    serial.writeValue("D Out", mesure_D_Out)
    radio.sendValue("D Out", mesure_D_Out)
    serial.writeValue("A Out", mesure_A_Out)
    radio.sendValue("A Out", mesure_A_Out)
}
let mesure_A_Out = 0
let mesure_D_Out = 0
radio.setGroup(10)
basic.forever(function () {
    basic.showIcon(IconNames.Square)
    LectureCapteurs()
    EnvoieDonnees()
})
