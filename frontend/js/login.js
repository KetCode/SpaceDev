localStorage.clear()

async function login(e) {
    e.preventDefault()
    
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    await fetch("http://localhost:3110/user/login", {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then((result) => (
        result
    )).then(data => {
        console.log(data)
        if (data.status == 200) {
            data.json().then(user => {
                localStorage.setItem('id', user.id)
                localStorage.setItem('name', user.name)
                localStorage.setItem('surname', user.surname)
                localStorage.setItem('email', user.email)
                localStorage.setItem('password', user.password)
            })
            window.location.href = "/index.html"
        } else {
            window.alert('Não foi possível fazer o login.')
        }
    })
}