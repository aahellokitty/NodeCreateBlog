const mysql = require('mysql')

//创建链接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    port: '3306',
    database: 'myblog'
})

//连接
con.connect()

//执行sql语句
const sql = `delete from users where username='zhangsan' ;`
con.query(sql, (err, result) => {
    if(err){
        console.error(err)
    }
    console.log(result)
})

//连接结束

con.end()