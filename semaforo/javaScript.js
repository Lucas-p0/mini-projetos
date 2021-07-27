const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalid = null

const trafficLight = (event) => {
    turnOn[event.target.id]();
}
const chargeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors;
    turnOn[color]();
}
const turnOn = {
    'red': () => img.src = './img/vermelho.png',
    'yellow': () => img.src = './img/amarelo.png',
    'green': () => img.src = './img/verde.png',
    'automatic': () => setInterval(chargeColor, 1000)
}

buttons.addEventListener('click', trafficLight)