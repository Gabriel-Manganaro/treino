function tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
        window.alert("[Erro] confira os dados!!")
    } else{
    var x = Number(num.value)
    var y = Number(end.value)
    var z = 0
    var n = ''
    var res = window.document.getElementById('resultado')
    res.innerHTML = `Resultado é... <br>`
    n = x/y
    res.innerHTML += `${x} / ${y} = ${n}<br>`
}
//do {
  // n = x/z
  // res.innerHTML += `${z} / ${x} = ${n}<br>`
  // z++ 
//}while( z <= y)
}