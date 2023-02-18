//Variables
let btnCopiar = document.querySelector('#btnCopiar');
let botonEncriptador = document.querySelector("#botonEncriptador");
let botonDesencriptador = document.querySelector("#botonDesencriptador");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"


// Listeners 

// ListenerButonEncriptador
botonEncriptador.addEventListener('click', encriptar) // CallBack

// ListenerButonDesencriptador
botonDesencriptador.addEventListener('click', desencriptar) // CallBack

// ListenerButonCopiar
btnCopiar.addEventListener('click', copiar)

// Funcion Encriptar
 function encriptar() {
    let mensaje = document.querySelector('#mensaje').value;
    let textoCifrado = mensaje
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    let mensajeFinal = document.querySelector('#mensajeFinal');
    mensajeFinal.innerHTML = textoCifrado
}
 

// Funcion DesencriptarTexto
function desencriptar(){
  let mensaje = document.querySelector('#mensaje').value;
  let textoDescifrado = mensaje
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "");
    let mensajeFinal = document.querySelector('#mensajeFinal');
    mensajeFinal.innerHTML = textoDescifrado
} 

// Funcion copiar  
function copiar(){
    navigator.clipboard.writeText(mensajeFinal.textContent);
}