async function register(e) {
    e.preventDefault()

    var name = document.getElementById('name').value
    var surname = document.getElementById('surname').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value

    await fetch("http://localhost:3110/users", {
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
            window.alert('Usuário cadastrado com sucesso!')
            window.location.href = "/login.html"
        } if(data.status == 409){
            window.alert('Ocorreu um erro ao criar o usuário')
            window.location.reload()
        } else {
            window.alert('Não foi possível cadastradar o usuário')
        }
    })
}