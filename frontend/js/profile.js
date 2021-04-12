document.getElementById('name').value = localStorage.getItem('name')
document.getElementById('surname').value = localStorage.getItem('surname')
document.getElementById('email').value = localStorage.getItem('email')
document.getElementById('password').value = localStorage.getItem('password')

async function update(e) {
    e.preventDefault()
    
    var id = localStorage.getItem('id')
    var name = document.getElementById('name').value
    var surname = document.getElementById('surname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    await fetch(`http://localhost:3110/user/` + id, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            name,
            surname,
            email,
            password
        })
    }).then((result) => (
        result
    )).then(data => {
        console.log(data)
        if (data.status == 200) {
            data.json().then(user => {
                localStorage.setItem('name', user.name)
                localStorage.setItem('surname', user.surname)
                localStorage.setItem('email', user.email)
                localStorage.setItem('password', user.password)
            })
            window.location.reload()
        } else {
            window.alert('Não foi possível fazer o login')
        }
    })
}

async function remove(e) {
    e.preventDefault()
    
    var id = localStorage.getItem('id')

    await fetch(`http://localhost:3110/user/delete/` + id, {
        method: 'POST',
        headers: { 
            'Accept': 'application/json', 
        }
    }).then((result) => (
        result
    )).then(data => {
        console.log(data)
        if (data.status == 200) {
            localStorage.clear()
            window.location.href = "/index.html"
        } else {
            window.alert('Não foi possível remover o usuário')
        }
    })
}