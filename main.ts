basic.forever(function () {
    if (Seguidor_de_Linha.readUma(Umsensor.branco, 605)) {
        robotbit.MotorRun(Seguidor_de_Linha.Motors.M1A, 123)
    } else {
        robotbit.MotorRun(Seguidor_de_Linha.Motors.M2A, 123)
    }
})
