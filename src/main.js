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
botonDesencriptador.addEventListener('click', desencriptarBtn) // CallBack

// ListenerButonCopiar
btnCopiar.addEventListener('click', copiar)

// Funcion validar
function esValido(mensaje){

    let respuesta = true;
    let ascii;
    const textoDescompuesto = descomponerTexto(mensaje);

    // validar mayúsculas y carácteres especiales
    for(let i = 0; i < textoDescompuesto.length; i++){
        if(textoDescompuesto[i] != " "){
            if(textoDescompuesto[i] === textoDescompuesto[i].toUpperCase())
                respuesta = false;
            ascii = textoDescompuesto[i].charCodeAt(0);
            if(ascii < 64 && ascii > 91)
                respuesta = false;
        }
    }

    return respuesta;
    }

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
function desencriptar(textoDesencriptado){
    let matriz = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]];

    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matriz.length; i++){

        if(textoDesencriptado.includes(matriz[i][0])){

            textoDesencriptado = textoDesencriptado.replaceAll(matriz[i][0],
                matriz[i][1])
        }
    }
    return textoDesencriptado;
} 

// Funcion desencriptarBtn
function desencriptarBtn(){
    const mensajeDesencriptado = desencriptar(mensaje.value)
    mensajeFinal.innerHTML = mensajeDesencriptado
    mensaje.value = ""
}

// Funcion copiar  
function copiar(){
    navigator.clipboard.writeText(mensajeFinal.textContent);
}