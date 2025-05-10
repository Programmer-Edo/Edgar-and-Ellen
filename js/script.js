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

const form = document.forms[0]
const inputNumber = form.querySelector('input[name=NumberOfGuests]')
const input = form.querySelectorAll('input')
const inputRadio = form.querySelectorAll('input[type=radio]')
const labels = form.querySelectorAll('label')


inputNumber.addEventListener('input', (e) => {
    inputNumber.value = inputNumber.value.replace(/[^0-9]/g, '')
})

input.forEach((elem,) => {
    elem.addEventListener('input', (e) => {
        if(elem.value.trim() === ''){
            elem.style.borderBottom = '2px solid crimson'
            elem.classList.add('input-error')
        }else {
            elem.style.borderBottom = ''
            elem.classList.remove('input-error')
        }
    })
})

inputRadio.forEach((elem, index) => {
    elem.addEventListener('change', () => {
        if (index >= 2) {
            inputRadio[2].style.border = '2px solid black'
            inputRadio[3].style.border = '2px solid black'
            labels[2].style.color = 'black'
            labels[3].style.color = 'black'
        }  else {
            inputRadio[0].style.border = '2px solid black'
            inputRadio[1].style.border = '2px solid black'
            labels[0].style.color = 'black'
            labels[1].style.color = 'black'
        }
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(form);
    const values = Object.fromEntries(formData.entries());

    let isValid = true

    if (!values.group1) {
        inputRadio.forEach((radio, index) => {
            if(index <= 1){
                labels[index].style.color = 'crimson'
                radio.style.border = '2px solid crimson'
            }
        })
        isValid = false
    } else {
        inputRadio.forEach((radio, index) => {
            if(index <= 1){
                labels[index].style.color = ''
                radio.style.border = ''
            }
        })
    }

    if (!values.group2) {
        inputRadio.forEach((radio, index) => {
            if(index >= 2){
                labels[index].style.color = 'crimson'
                radio.style.border = '2px solid crimson'
            }
        })
        isValid = false
    } else {
        inputRadio.forEach((radio, index) => {
            if(index >= 2) {
                labels[index].style.color = ''
                radio.style.border = ''
            }
        })
    }

    input.forEach((elem,) => {
        if(elem.value.trim() === ''){
            elem.style.borderBottom = '2px solid crimson'
            elem.classList.add('input-error')
            isValid = false
        } else {
            elem.style.borderBottom = ''
            elem.classList.remove('input-error')
        }
    })

    if (isValid) {
        console.log(values);
    }

})