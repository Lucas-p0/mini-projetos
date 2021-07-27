function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtAno')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/fotoCriancaMasc.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'img/fotoJovemMasc.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'img/fotoAdultoMasc.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/fotoIdosoMasc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
        } if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute('src', 'img/fotoCriancaFem.png')
        } else if (idade < 21) {
            //jovem
            img.setAttribute('src', 'img/fotoJovemFem.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'img/fotoAdultoFem.png')
        } else {
            //idoso
            img.setAttribute('src', 'img/fotoIdosoFem.png')
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos um ${genero} como ${idade} anos.`
        resultado.appendChild(img)
    }
}