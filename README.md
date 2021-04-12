## Tecnologias 🚀

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- JavaScript
- NodeJS
- Express
- Mysql
- Cors
- Sequelize

### Como rodar ?

Antes de tudo clone o repositório: 

```
https://github.com/KetCode/SpaceDev.git
```

ou descompacte o arquivo zip enviado.

Será preciso a utilização do banco de dados mysql. Para configurar conforme o login da sua máquina, entre na pasta `backend/src/config/` e abra o arquivo database.js, nele você irá alterar a linha 4 (username) e 5 (password), com o mesmo login do mysql da sua máquina.

Abra a pasta backend e execute os seguintes comandos:

```
yarn install
yarn sequelize db:create
yarn sequelize db:migrate
yarn dev
```

_Observação:_ Não altere a porta, a aplicação irá dar problemas.

Depois de ter feitos esses passos basta abrir a pasta frontend. Utilizei a extensão no vscode chamada "live server", com isso, inicie o live server que o frontend vai começar a funcionar.