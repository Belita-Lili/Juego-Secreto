/*let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

Los dos codigos de arriba se pueden sustituir por la linea de codigo:
asignarTextoElemento('h1','Juego del numero secreto');
*/
let numeroSecreo = 0;
let Intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreo);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario);
    //console.log(typeof(numeroSecreo));
    //console.log(numeroSecreo);
    //console.log(numeroDeUsuario === numeroSecreo);
    //===  ->igual en valor y en tipo de datos

    if (numeroDeUsuario === numeroSecreo){
        asignarTextoElemento('p',`Acertaste el numero en ${Intentos} ${(Intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreo){
            asignarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        Intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta incluido en la lista

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreo = generarNumeroSecreto();
    Intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numeros

    //Generar el numero aleatorio

    //Inicializar el numeor de intentos
    condicionesIniciales();

    //Deshabilirar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable','true');
}
/*
function sortearLibro() {
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
    }
    // Código omitido
}
*/
condicionesIniciales();