const fs = require('fs')
const path = require('path')
const fileName = path.resolve(__dirname, 'test.txt')

//读取文件
fs.readFile(fileName, (err, data) => {
    if(err){
        console.error(err)
        return
    }
    console.log('读取文件', data.toString())
})

//写入文件
const content = '这是新写入的内容\n'
const opt = {
    flag: 'a'
}
fs.writeFile(fileName, content, opt, (err, data) => {
    if(err){
        console.error(err)
        return
    }
})
fs.exists(fileName, (exist) => {
    console.log('exist', exist)
})



