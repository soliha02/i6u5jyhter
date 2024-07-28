let text = document.querySelector('h1')
let second = document.getElementById('sekund')
let minut = document.getElementById('Minut')
let soat = document.getElementById('Soat')

setInterval(() => {
    
second.innerHTML = new Date().getSeconds()
minut.innerHTML = new Date().getMinutes()
soat.innerHTML = new Date().getHours()
}, 1000);