// importando os módulos http e filesystem
const http = require('http'), fs = require('fs')

// criando o servidor http
http.createServer((req, res) => {
    // criando o cabeçalho da resposta
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Access-Control-Allow-Origin': '*'
    })
    // fazendo a leitura do index.html
    let readStream = fs.createReadStream(__dirname + '/index.html')
    // enviando para o cliente
    readStream.pipe(res)
}).listen(8000)

// informando o endpoint para o usuário
console.log('Visite-me em: http://localhost:8000')