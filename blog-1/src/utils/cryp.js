const crypto = require('crypto')

//密钥
const secret = 'abx';

//md5加密
const md5 = (content) => {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')//转换成16进制
}

//加密函数
const genPassword = (password) => {
    const str = `password=${password}&key=${secret}`
    return md5(str)
}

//const result = genPassword('123')
module.exports = {
    genPassword
}
