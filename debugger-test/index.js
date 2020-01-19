const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type':'text/html'})
    res.end(
        'hello world'
    )
})
// server.listen(3000, () => {
//     console.log('listening on 3000 port')
// })
server.listen(8000)
