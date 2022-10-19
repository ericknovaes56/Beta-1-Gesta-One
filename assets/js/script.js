window.addEventListener("load", ()=>{
    var upload = document.querySelector(".upload")
    upload.classList.add("show")
})
var uimg = document.getElementById("uimg")
document.getElementById("file").addEventListener("change", function(event){
    var output = URL.createObjectURL(event.target.files[0]);
    console.log(output)
    document.getElementById("icam").style.display='none'
    uimg.src=output
    uimg.style.display='flex'
})
document.getElementById("btn").addEventListener("click", ()=>{
    var file = document.getElementById("file").value
    var ruaname = document.getElementById("ruaname").value
    var pontoname = document.getElementById("pontoname").value
    var msg = document.getElementById("menssagem").value
    if ( ruaname != "" && pontoname != "" && msg != "" && file != ""){
        var okscreen = document.getElementById("okscreen")
        okscreen.classList.add("showscreen")

        localStorage.setItem("nomedarua", ruaname)
        localStorage.setItem("pontoname", pontoname)
        localStorage.setItem("msg", msg)
        localStorage.setItem("img", uimg.src)

        setTimeout(() => {
            okscreen.classList.remove("showscreen")
            window.location.href='adm.html'
        }, 2000);
    }else{
        alert("coloque coisa vagabundo")
    }
})