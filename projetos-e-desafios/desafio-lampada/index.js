var ligar = window.document.getElementById('imgL')
var desligada = window.document.getElementById('imgD')
var quebrada = window.document.getElementById('imgQ')

function lampadaDesligada(){
    ligar.style = "display:none"
    desligada.style = "display:flex"
    quebrada.style = "display:none"
}
function lampadaLigada(){
    ligar.style = "display:flex"
    desligada.style = "display:none"
    quebrada.style = "display:none"
}
function lampadaQuebrada(){
    quebrada.style = "display:flex"
    ligar.style = "display:none"
    desligada.style = "display:none"
}