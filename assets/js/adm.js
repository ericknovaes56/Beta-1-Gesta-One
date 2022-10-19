var nome_da_rua = localStorage.getItem('nomedarua')
var ponto = localStorage.getItem('pontoname')
var msg = localStorage.getItem('msg')
var img = localStorage.getItem('img')


window.addEventListener("load", ()=>{
    var ruas = document.querySelectorAll("#rua")
    ruas.forEach(element => {
    element.innerHTML=nome_da_rua
    });
    var pontos = document.querySelectorAll("#ponto")
    pontos.forEach(element => {
    element.innerHTML=ponto
    });
    var imgs = document.querySelectorAll("#imgfoto")
    imgs.forEach(element => {
    element.src=img
    });

})

var avisoclick = document.querySelector(".aviso")
var ball = document.querySelector(".ball")
avisoclick.addEventListener("click", ()=>{
    var valor = ball.innerHTML
    valor = parseInt(valor) + 1
    ball.innerHTML=valor
    if (valor > 9){
        ball.innerHTML='+9'
    }
})
var apaga1 = document.getElementById("apaga1")
var apaga2 = document.getElementById("apaga2")
var apaga3 = document.getElementById("apaga3")


var aprove1 = document.getElementById("aprove1")
var aprove2 = document.getElementById("aprove2")

aprove1.addEventListener("click", ()=>{
    apaga1.classList.add('apaga1')
    apaga2.classList.remove('apaga2')
})
aprove2.addEventListener("click", ()=>{
    apaga2.classList.add('apaga2')
    apaga3.classList.remove('apaga3')
})

