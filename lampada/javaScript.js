const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isLampQueb() {
    return lamp.src.indexOf('quebrada') > -1
}
function lampOn() {
    if (!isLampQueb())
        lamp.src = './img/ligada.jpg'
}
function lampOff() {
    if (!isLampQueb())
        lamp.src = './img/desligada.jpg'
}
function lampQueb() {
    lamp.src = './img/quebrada.jpg'
}
turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('dblclick', lampQueb)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)