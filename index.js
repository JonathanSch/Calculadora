const boton1 = document.getElementById('boton1')
const boton2 = document.getElementById('boton2')
const boton3 = document.getElementById('boton3')
const boton4 = document.getElementById('boton4')
const boton5 = document.getElementById('boton5')
const boton6 = document.getElementById('boton6')
const boton7 = document.getElementById('boton7')
const boton8 = document.getElementById('boton8')
const boton9 = document.getElementById('boton9')
const boton0 = document.getElementById('boton0')
const botonMas = document.getElementById('boton+')
const botonMenos = document.getElementById('boton-')
const botonX = document.getElementById('botonx')
const botonDiv = document.getElementById('boton/')
const botonAC = document.getElementById('botonAC')
const botonIgual = document.getElementById('boton=')
const botonBorrar = document.getElementById('borrar')
let texto = document.getElementById('texto')
let cajaTexto = '0';
let lastOperacion;

boton1.addEventListener('click', () => {
    if (cajaTexto == "0") {
        cajaTexto = "1";
        texto.innerHTML = cajaTexto;
        lastOperacion = '1';
    }
    else {
        cajaTexto += "1";
        texto.innerHTML = cajaTexto;
        lastOperacion = '1';
    }

})
boton2.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "2";
        texto.innerHTML = cajaTexto;
        lastOperacion = '2';
    }
    else {
        cajaTexto += "2";
        texto.innerHTML = cajaTexto;
        lastOperacion = '2';
    }

})
boton3.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "3";
        texto.innerHTML = cajaTexto;
        lastOperacion = '3';
    }
    else {
        cajaTexto += "3";
        texto.innerHTML = cajaTexto;
        lastOperacion = '3';
    }

})
boton4.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "4";
        texto.innerHTML = cajaTexto;
        lastOperacion = '4';
    }
    else {
        cajaTexto += "4";
        texto.innerHTML = cajaTexto;
        lastOperacion = '4';
    }

})
boton5.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "5";
        texto.innerHTML = cajaTexto;
        lastOperacion = '5';
    }
    else {
        cajaTexto += "5";
        texto.innerHTML = cajaTexto;
        lastOperacion = '5';
    }

})
boton6.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "6";
        texto.innerHTML = cajaTexto;
        lastOperacion = '6';
    }
    else {
        cajaTexto += "6";
        texto.innerHTML = cajaTexto;
        lastOperacion = '6';
    }

})
boton7.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "7";
        texto.innerHTML = cajaTexto;
        lastOperacion = '7';
    }
    else {
        cajaTexto += "7";
        texto.innerHTML = cajaTexto;
        lastOperacion = '7';
    }

})
boton8.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "8";
        texto.innerHTML = cajaTexto;
        lastOperacion = '8';
    }
    else {
        cajaTexto += "8";
        texto.innerHTML = cajaTexto;
        lastOperacion = '8';
    }

})
boton9.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "9";
        texto.innerHTML = cajaTexto;
        lastOperacion = '9';
    }
    else {
        cajaTexto += "9";
        texto.innerHTML = cajaTexto;
        lastOperacion = '9';
    }

})
boton0.addEventListener('click', () => {
    if (cajaTexto == "0" || cajaTexto === NaN) {
        cajaTexto = "0";
        texto.innerHTML = cajaTexto;
        lastOperacion = '0';
    }
    else {
        cajaTexto += "0";
        texto.innerHTML = cajaTexto;
        lastOperacion = '0';
    }

})
botonMas.addEventListener('click', () => {
    cajaTexto += " + ";
    texto.innerHTML = cajaTexto;
    lastOperacion = ' + ';
})
botonMenos.addEventListener('click', () => {
    cajaTexto += " - ";
    texto.innerHTML = cajaTexto;
    lastOperacion = ' - ';
})
botonX.addEventListener('click', () => {
    cajaTexto += " x ";
    texto.innerHTML = cajaTexto;
    lastOperacion = ' x ';
})
botonDiv.addEventListener('click', () => {
    cajaTexto += " ÷ ";
    texto.innerHTML = cajaTexto;
    lastOperacion = ' ÷ ';
})
botonAC.addEventListener('click', () => {
    cajaTexto = "0";
    texto.innerHTML = cajaTexto;
})
botonIgual.addEventListener('click', () => {
    if (texto.innerHTML == '0') {
        texto.innerHTML = 'Necesitas escribir mas';
    }
    else if (cajaTexto.split(' ')[1] === '+' || cajaTexto.split(' ')[1] === '-') {
        texto.innerHTML = eval(texto.innerHTML);
        cajaTexto = eval(texto.innerHTML)
    }
    else if (cajaTexto.split(' ')[1] === 'x') {
        texto.innerHTML = parseInt(cajaTexto.split(' ')[0]) * parseInt(cajaTexto.split(' ')[2]);
        cajaTexto = parseInt(cajaTexto.split(' ')[0]) * parseInt(cajaTexto.split(' ')[2]);
    }
    else if (cajaTexto.split(' ')[1] === '÷') {
        texto.innerHTML = parseInt(cajaTexto.split(' ')[0]) / parseInt(cajaTexto.split(' ')[2]);
        cajaTexto = parseInt(cajaTexto.split(' ')[0]) / parseInt(cajaTexto.split(' ')[2]);
    }

})

botonBorrar.addEventListener('click', () => {

    if (cajaTexto.split('').pop() == ' ') {

        let lavar1 = cajaTexto.split('')
        lavar1.length = lavar1.length - 3;
        lavar1 = lavar1.join('');
        cajaTexto = lavar1;

    }
    else if (cajaTexto.length == 1) {
        cajaTexto = 0
    }
    else {
        let lavar1 = cajaTexto.split('')
        lavar1.length = lavar1.length - 1;
        lavar1 = lavar1.join('');
        cajaTexto = lavar1;
    }

    texto.innerHTML = cajaTexto
})





