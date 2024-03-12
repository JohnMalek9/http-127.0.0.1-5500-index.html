const entrada =document.querySelector(".entrada")
const salida =document.querySelector(".salida")


function btnEncriptar(){
    const textoEncriptado = encriptar(entrada.value)
    salida.value = textoEncriptado
    entrada.value =""
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(entrada.value)
    salida.value = textoDesencriptado
    entrada.value =""
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i =0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}



const texto = document.getElementById("salida").value;

async function copiarContenido() {
    try {
        await navigator.clipboard.writeText(texto);
        console.log('Contenido copiado al portapapeles');
        } catch (err) {
        console.error('Error al copiar: ', err);
    }
}

