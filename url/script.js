
function generate(){
    let inpt = document.getElementById("inpt")
    let btn = document.querySelector("button")
    let img = document.getElementById('Imagediv')
    let Imagee = document.getElementById('Imagee')

    Imagee.src = "img.jpeg"  + inpt.value; 

}


