//标准的输入输出
//process.stdin.pipe(process.stdout)

// const http = require('http')
// const server = http.createServer((req, res) => {
//     if(req.method === 'POST'){
//         req.pipe(res)
//     }
// })
// server.listen(8000)

//复制文件
// const fs = require('fs');
// const path = require('path')
//
// const fileName1 = path.resolve(__dirname, 'test1.txt')
// const fileName2 = path.resolve(__dirname, 'test2.txt')
//
// const readerStream = fs.createReadStream(fileName1)
// const writerStream = fs.createWriteStream(fileName2)
//
// readerStream.pipe(writerStream)
//
// readerStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })
//
// readerStream.on('end', () => {
//     console.log('拷贝完成')
// });


const http = require('http')
const fs = require('fs')
const path =require('path')
const fileName1 = path.resolve(__dirname, 'test1.txt')
const server = http.createServer((req, res) => {
    if(req.method === 'GET'){
        const readerStream = fs.createReadStream(fileName1)
        readerStream.pipe(res)
    }
})
server.listen(8000)