const dateElements = document.querySelectorAll('.js-date')
const checkBox = document.querySelector('.play-btn')
const audio = document.getElementById('audio')

let currentDate = new Date()
let weddingDate = new Date(2025, 5, 29)

let start = Date.parse(currentDate)
let end = Date.parse(weddingDate)

let day = 0

for(let i = start; i <= end; i = i + 24*60*60*1000){
    day++
}

dateElements[0].textContent = day

if(day !== 0){
    function updateClock(){
        const time = new Date()
        dateElements[1].textContent = time.getHours().toString().padStart(2, '0')
        dateElements[2].textContent = time.getMinutes().toString().padStart(2, '0')
        dateElements[3].textContent = time.getSeconds().toString().padStart(2, '0')
    }

    setInterval(updateClock, 1000)
    updateClock()

}else {
    dateElements.forEach(el => el.textContent = '00')
}

checkBox.addEventListener('change', function(){
    this.checked ? audio.play() : audio.pause()
})


console.log('հարսանյաց հանդիսություն'.toUpperCase())