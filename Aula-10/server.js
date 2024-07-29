// carregando o express e criando a app
const app = require('express')()
const path = require('path')

// criando uma rota para '/'
app.get('/', (req, res) => {
    // enviando o index.html para o cliente
    res.sendFile(path.join(__dirname + '/index.html'))
})

// iniciando o serviço na porta 3000
app.listen(3000)
console.log('O servidor está rodando na porta 3000!')
