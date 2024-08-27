const textoUsuario = document.querySelector(".contenido-encriptar-texto");
const textoMensaje = document.querySelector(".contenido-mensaje-texto");


function encriptarTexto(texto){
    let matrizEncriptar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizEncriptar.length; i++) {
        if(texto.includes(matrizEncriptar[i][0])){
            texto=texto.replaceAll(matrizEncriptar[i][0],matrizEncriptar[i][1]);
        }
    }
    return texto;
}

function desencriptarTexto(texto){
    let matrizDesencriptar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < matrizDesencriptar.length; i++) {
        if(texto.includes(matrizDesencriptar[i][0])){
            texto=texto.replaceAll(matrizDesencriptar[i][0],matrizDesencriptar[i][1]);
        }
    }
    return texto;
}


function botonEncriptar(){
    let textoEncriptado = encriptarTexto(textoUsuario.value)
    textoMensaje.value = textoEncriptado;
    textoUsuario.value = "";
    textoMensaje.style.backgroundImage = "none";
    document.querySelector(".boton-copiar").style.display = "flex";
    document.querySelector(".contenido-mensaje-parrafo").style.display = "none";
    document.querySelector(".contenido-mensaje-parrafo2").style.display = "none";

}

function botonDesencriptar(){
    let textoEncriptado = desencriptarTexto(textoUsuario.value)
    textoMensaje.value = textoEncriptado;
}

function copiar(){
    textoMensaje.select();
    document.execCommand("copy");
}