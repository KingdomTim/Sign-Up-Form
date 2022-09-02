const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirm_password')
const message = document.querySelector('.message')
const submit = document.getElementById('#submit')


function checkPass(pass,confPass) {
    pass = document.getElementById("password").value
    confPass = document.getElementById("confirm_password").value

    if (pass !== "" && confPass !== "") {
        if (pass === confPass) {
            password.classList.remove('invalid')
            password.classList.add('valid')
            confirmPassword.classList.remove('invalid')
            confirmPassword.classList.add('valid')
            message.textContent = ""
        } else {
            password.classList.remove('valid')
            password.classList.add('invalid')
            confirmPassword.classList.remove('valid')
            confirmPassword.classList.add('invalid')
            message.textContent = '*Passwords do not match'
        }
    } else {
            password.classList.remove('invalid')
            confirmPassword.classList.remove('invalid')
            password.classList.remove('valid')
            confirmPassword.classList.remove('valid')
            message.textContent = ""
    } 
}

function validateForm(pass,confPass) {
    pass = document.getElementById("password").value
    confPass = document.getElementById("confirm_password").value

    if(pass != confPass) {
        event.preventDefault()
    }
}

password.onchange = checkPass
confirmPassword.onchange = checkPass
