function carregar() {
    var msg = window.document.getElementById('msg')
    var msg = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.InnerHTML = `Agora sao ${hora} horas.`
}