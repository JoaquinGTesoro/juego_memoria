const arrayCartas = [
    {
        nombre: 'fries',
        img: 'images/fries.png'
    },
    {
        nombre: 'cheeseburguer',
        img: 'images/cheeseburger.png'
    },
    {
        nombre: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        nombre: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        nombre: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        nombre: 'pizza',
        img: 'images/pizza.png'
    },
    {
        nombre: 'fries',
        img: 'images/fries.png'
    },
    {
        nombre: 'cheeseburguer',
        img: 'images/cheeseburger.png'
    },
    {
        nombre: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        nombre: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        nombre: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        nombre: 'pizza',
        img: 'images/pizza.png'
    }
];

arrayCartas.sort(() => 0.5 - Math.random());

const gridDisplay = document.getElementById('grid');
const resultadoDisplay = document.getElementById('resultado');

let cartasElegidas = [];
let idCartasElegidas = [];
let puntaje = 0;

function crearTablero () {
    for (let i = 0; i < arrayCartas.length; i++) {
        const carta = document.createElement('img');
        carta.setAttribute('src', 'images/blank.png');
        carta.setAttribute('data-id', i);
        carta.addEventListener('click', voltearCarta);
        gridDisplay.appendChild(carta);
    }
}

crearTablero()

function checkPareja() {
    const cartas = document.querySelectorAll('#grid img');
    if (idCartasElegidas[0] === idCartasElegidas[1]) {
        alert("Seleccionaste la misma carta!");
        cartas[idCartasElegidas[0]].setAttribute('src', 'images/blank.png');
    } else if (cartasElegidas[0] === cartasElegidas[1]){
        alert("Encontraste una pareja!");
        cartas[idCartasElegidas[0]].setAttribute('src', 'images/white.png');
        cartas[idCartasElegidas[1]].setAttribute('src', 'images/white.png');
        cartas[idCartasElegidas[0]].removeEventListener('click', voltearCarta);
        cartas[idCartasElegidas[1]].removeEventListener('click', voltearCarta);
        ++puntaje;
        resultadoDisplay.textContent = puntaje;
    } else {
        cartas[idCartasElegidas[0]].setAttribute('src', 'images/blank.png');
        cartas[idCartasElegidas[1]].setAttribute('src', 'images/blank.png');    
    }   
    cartasElegidas = [];
    idCartasElegidas = [];

    if(puntaje == arrayCartas.length / 2) {
        resultadoDisplay.textContent = "¡Felicidades, encontraste todas las parejas!"
    }
}

function voltearCarta() {
    const idCarta = this.getAttribute('data-id');
    cartasElegidas.push(arrayCartas[idCarta].nombre);
    idCartasElegidas.push(idCarta);
    this.setAttribute('src', arrayCartas[idCarta].img);
    if (cartasElegidas.length === 2) {
        setTimeout(checkPareja, 500);
    }
}