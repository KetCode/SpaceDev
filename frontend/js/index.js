var username = document.getElementById('username')
username.innerHTML = localStorage.getItem('name')
var span = document.createElement('span')
span.innerHTML = "Ver perfil"
username.appendChild(span)