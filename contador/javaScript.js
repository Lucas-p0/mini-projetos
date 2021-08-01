function contar() {
    let numInicio = document.getElementById('numInicio')
    let numFinal = document.getElementById('numFinal')
    let numPasso = document.getElementById('numPasso')
    let res = document.getElementById('res')

    if (numFinal.value.length == 0 || numInicio.value.length == 0 || numPasso.value.length == 0) {
        window.alert('[erro] Faltam dados!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(numInicio.value)
        let f = Number(numFinal.value)
        let p = Number(numPasso.value)

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        res.innerHTML += `.FIM!`
    }
}
