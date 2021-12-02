

function calcularGanador() {
    var temp = document.getElementById('a_este')
    var temp_2 = document.getElementById('a_centro')
    var temp_3 = document.getElementById('a_oeste')
    var temp_4 = document.getElementById('n_este')
    var temp_5 = document.getElementById('n_centro')
    var temp_6 = document.getElementById('n_oeste')

    var a_e = temp.options[temp.selectedIndex].textContent
    var a_c = temp_2.options[temp_2.selectedIndex].textContent
    var a_o = temp_3.options[temp_3.selectedIndex].textContent
    var n_e = temp_4.options[temp_4.selectedIndex].textContent
    var n_c = temp_5.options[temp_5.selectedIndex].textContent
    var n_o = temp_6.options[temp_6.selectedIndex].textContent

    const arrAmericana = [a_e, a_c, a_o]
    const arrNacional = [n_e, n_c, n_o]
    const adjetivos = [
        'intensa',
        'interesante',
        'cerrada',
        'peleada',
        'complicada',
        'controversial',
        'ajustada',
        'pareja',
        'tensa',
        'amañada',
        'caótica',
        'inesperada',
        'agitada',
        'aburrida',
    ]
    const adj = adjetivos[rand(0, 13)]
    const resultadosConf = [
        'gratuita de 3 juegos a 0, ',
        'cómoda de 3 partidos a 1, ',
        'cerrada de 3 juegos a 2, ',
    ]
    const resultado1 = resultadosConf[rand(0, 2)]
    const resultadosWS = [
        'barridón histórico de 4 juegos a 0',
        'resultado comfortable de 4 ganados contra 1 perdido',
        'duro enfrentamiento terminando 4-2',
        'cerradísimo 4 partidos a 3',
    ]
    const resultado2 = resultadosWS[rand(0, 3)]

    console.log(arrAmericana)

    var numSeed = rand(0, 2)
    console.log(numSeed)
    var numH2H = rand(0, 1)

    const seed1Americana = arrAmericana[numSeed]
    arrAmericana.splice(numSeed, 1) // Borra el campeón Americana

    const seed2Americana = arrAmericana[numH2H]
    arrAmericana.splice(numH2H, 1) // Borra al que pasa a serie de conferencia

    const perdedorAmericana = arrAmericana[0]

    numSeed = rand(0, 2)
    numH2H = rand(0, 1)

    const seed1Nacional = arrNacional[numSeed]
    arrNacional.splice(numSeed, 1) // Borra el campeón Nacional

    const seed2Nacional = arrNacional[numH2H]
    arrNacional.splice(numH2H, 1) // Borra al que pasa a semis

    const perdedorNacional = arrNacional[0]

    const confAmericana = [seed1Americana, seed2Americana]
    const confNacional = [seed1Nacional, seed2Nacional]

    numH2H = rand(0, 1)
    const campeonAmericana = confAmericana[numH2H]
    numH2H = rand(0, 1)
    const campeonNacional = confNacional[numH2H]

    numH2H = rand(0, 1)
    const worldSeries = [campeonAmericana, campeonNacional]
    const campeon = worldSeries[numH2H]

    document.getElementById('seeds').innerHTML =
        'Felicidades a los primeros sembrados: ' +
        seed1Americana +
        ' en la conferencia Americana y ' +
        seed1Nacional +
        ' en la conferencia Nacional. Ambos equipos se ganan un descanso en la primera ronda.'

    document.getElementById('primera').innerHTML =
        'Primera ronda: En esta primera ronda desafortunadamente los ' +
        perdedorAmericana +
        ' y los ' +
        perdedorNacional +
        ' fueron eliminados. ' +
        seed2Americana +
        ' y ' +
        seed2Nacional +
        ' avanzan a la serie de conferencia.'

    document.getElementById('segunda').innerHTML =
        'Segunda ronda: En esta ' +
        adj +
        ' ronda, en la conferencia Americana los ' +
        seed1Americana +
        ' se vieron la cara contra los ' +
        seed2Americana +
        ' y tras una partida ' +
        resultado1 +
        ' los ' +
        campeonAmericana +
        ' pasan a la Serie Mundial. En la conferencia Nacional los ' +
        seed1Nacional +
        ' se enfrentaron ante los ' +
        seed2Nacional +
        '. Después de una ' +
        adjetivos[rand(0, 13)] +
        ' serie, triunfaron los ' +
        campeonNacional +
        '.'

    document.getElementById('final').innerHTML =
        'Serie Mundial, el momento que todos estamos esperando, y el campeonato va para ' +
        campeon +
        '. Con un ' +
        resultado2 +
        '. ¡Muchas felicidades al equipo ganador y te esperamos en el siguiente torneo!'
}

function rand(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}
