function calculadoraDeTinta() {
    const larguraParede = document.getElementById('larguraParede')
    const alturaParede = document.getElementById('alturaParede')
    const res = document.getElementById('res')

    if (larguraParede.value.length == 0 || alturaParede.value.length == 0) {
        window.alert('[ERRO] Faltam os dados!')
    } else {
        const largura = Number(larguraParede.value)
        const altura = Number(alturaParede.value)
        const areaDaParede = largura * altura
        const quantidadeDeTinta = areaDaParede / 2
        res.innerHTML = `Sua parede tem dimensão de ${largura} x ${altura} e sua área é de ${areaDaParede} m², para pintar a parede você precisará de ${quantidadeDeTinta} litros de tinta.`
    }
}