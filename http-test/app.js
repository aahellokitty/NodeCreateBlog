const http = require('http')
const querystring = require('querystring')

// const server = http.createServer((req, res) => {
//     console.log('method:', req.method)//GET
//     const url = req.url
//     console.log('url:', url)
//     req.query = querystring.parse(url.split('?')[1])
//     console.log('query:', req.query)
//     res.end(
//         JSON.stringify(req.query)
//     )
// })

// const server = http.createServer((req,res) => {
//     if(req.method === 'POST'){
//         //req数据格式
//         console.log('req content-type', req.headers['content-type'])//请求头中的请求类型
//         //接收数据
//         let postData = ''
//         req.on('data', chunk => {
//             postData +=chunk.toString()//chunk二进制格式的数据，变成字符串的格式
//         })
//         req.on('end', () => {
//             console.log('postData:', postData)
//             res.end('hello world!')
//         })
//     }
// })

// server.listen(8000)
// console.log('OK')
const server = http.createServer((req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]
    const query = querystring.parse(url.split('?')[1])
    //设置返回格式为JSON
    res.setHeader('Content-type', 'application/json')
    //返回的数据
    const resData = {
        method,
        url,
        path,
        query
    }
    //返回
    if(method == 'GET'){
        res.end(
            JSON.stringify(resData)
        )
    }
    if(method == 'POST'){
        let postData = ''
        req.on('data', chunk =>{
            postData += chunk.toString()
        })
        req.on('end', () => {
            resData.postData = postData
            res.end(
                JSON.stringify(resData)
            )
        })
    }
})
server.listen(8000)
console.log('OK')