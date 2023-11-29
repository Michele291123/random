let numero = document.getElementById("numero")

function scrivi() {
    numero.textContent = genera()
}

function genera() {
    let min = Number(document.getElementById("n-min").value)
    let max = Number(document.getElementById("n-max").value)
    let x = Math.floor(((Math.random() * max) / min) +1)
    return x
}