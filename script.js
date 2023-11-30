let numero = document.getElementById("numero")
let min, max

function genera() {
    min = Math.max(Number(document.getElementById("n-min").value), 0);
    max = Math.max(Number(document.getElementById("n-max").value), 0);
    let x = Math.floor(((Math.random() * max) / min) +1)
    return x
}

function scrivi() {
    numero.textContent = genera() 
}