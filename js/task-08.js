

const formLogin = document.querySelector('.login-form')

formLogin.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const {
        elements: { email, password },
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        return alert('Заполните все поля!')
    }
    const userData = { email: email.value, Password: password.value }
    
    console.log(userData)
    event.currentTarget.reset()
};

