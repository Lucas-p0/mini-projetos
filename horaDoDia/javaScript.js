function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        //Bom dia 
        img.src = '/horaDoDia/img/fotoManha.png'
        document.body.style.background = '#F97F15'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = '/horaDoDia/img/fotoTarde.png'
        document.body.style.background = '#c05f1c'
    } else {
        //Boa noite
        img.src = '/horaDoDia/img/fotoNoite.png'
        document.body.style.background = '#09182e'
    }
}
