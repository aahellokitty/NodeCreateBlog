const { loginCheck } = require('../controller/uer')
const { SuccessModel, ErrorModel } = require('../model/resModel')
const handleUserRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    if (method === 'POST' && path === '/api/user/login') {
        const { username, password } = req.body
        const result = loginCheck(username, password)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter