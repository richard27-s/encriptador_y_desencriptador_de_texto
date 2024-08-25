const textarea = document.querySelector(".texto-area");
const mensaje = document.querySelector(".mensaje");
const botonCopiar = document.querySelector(".copiar");
const contenido = document.querySelector(".resultado-contenido");





//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function botonencriptar(){
    botonCopiar.style.visibility = "inherit";
    contenido.remove();
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado;
    
}   

function encriptar(stringencriptado){
let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
stringencriptado = stringencriptado.toLowerCase()

 for( let i = 0; i < matrizcodigo.length; i++){
    if(stringencriptado.includes(matrizcodigo[i][0])){
        stringencriptado = stringencriptado.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
    }
 }
 return stringencriptado
}


function botondesencriptar(){
    botonCopiar.style.visibility = "inherit";
    contenido.remove();
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado;
    
}

function desencriptar(stringdesencriptada){
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringdesencriptada = stringdesencriptada.toLowerCase()
    
     for( let i = 0; i < matrizcodigo.length; i++){
        if(stringdesencriptada.includes(matrizcodigo[i][1])){
            stringdesencriptada = stringdesencriptada.replaceAll(matrizcodigo[i][1] , matrizcodigo[i][0] )
        }
     }
     return stringdesencriptada
    }

    botonCopiar.addEventListener("click", function() {
        // Selecciona el contenido del textarea .mensaje
        const textoParaCopiar = mensaje.value;
        
        // Crea un elemento temporal input para usar el método execCommand
        const inputTemporal = document.createElement("input");
        inputTemporal.value = textoParaCopiar;
        document.body.appendChild(inputTemporal);
        
        // Selecciona el contenido del input temporal
        inputTemporal.select();
        inputTemporal.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        // Copia el texto al portapapeles
        document.execCommand("copy");
        
        // Elimina el input temporal del documento
        document.body.removeChild(inputTemporal);
        
        // Opcional: notifica al usuario que el texto ha sido copiado
        alert("Texto copiado al portapapeles!");
    });