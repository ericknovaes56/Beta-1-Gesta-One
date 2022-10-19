var img = localStorage.getItem('img')
window.addEventListener("load", ()=>{
    document.getElementById("img").src=img
    document.getElementById("caixa").style.backgroundImage='url('+img+')'
})