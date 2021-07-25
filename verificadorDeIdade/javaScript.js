function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.querySelector('div#res')
    const img = document.getElementById('imagem')


    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''


        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = './img/foto-Crianca-Masc.png'
                document.body.style.background = '#F97F15'
            } else if (idade < 21) {
                //Jovem
                img.src = './img/fotoJovemMasc.png'
            } else if (idade < 50) {
                //adulto
                img.src = './img/fotoAdultoMasc.png'
            } else {
                //idoso
                img.src = './img/fotoIdosoMasc.png'
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.src = '/verificadorDeIdade/img/fotoCriancaFem.png'
            } else if (idade < 21) {
                //Jovem
            } else if (idade < 50) {
                //adulto
            } else {
                //idoso
            }
        }

        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }
}