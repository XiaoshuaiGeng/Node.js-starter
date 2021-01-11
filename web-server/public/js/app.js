console.log('client side js loaded')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')

messageOne.textContent = ''
weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()
    // console.log('Testing')
    const location = search.value
    fetch('http://localhost:3000/weather?address='+ location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = JSON.stringify(data)
            }
        })
    })
})