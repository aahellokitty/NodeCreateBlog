const { exec } = require('../db/mysql')
const getList = (author, keyword) => {
    //返回假数据
    // return [
    //     {
    //         id: 1,
    //         title: '标题A',
    //         content: '内容A',
    //         createTime: 1579596944979,
    //         author: 'zhangsan'
    //     },
    //     {
    //         id: 2,
    //         title: '标题B',
    //         content: '内容B',
    //         createTime: 1579596964421,
    //         author: 'lisi'
    //     },
    // ]
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    //返回一个promise
    return exec(sql)
}

const getDetail = (id) => {
    //先返回假数据
    // return {
    //     id: 1,
    //     title: '标题A',
    //     content: '内容A',
    //     createTime: 1579596944979,
    //     author: 'zhangsan'
    // }
    const sql = `select * from blogs where id='${id}'`
    //返回的是一个对象，所以把数组的第一个元素取出来
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    //blogData包括标题，内容
    //console.log('newBlog blogData.....', blogData)
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()
    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createTime}, '${author}');
    `
    return exec(sql).then(insertData => {
        //console.log('insertData is ', insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
   // console.log('update blog....', id,blogData)
    const title = blogData.title
    const content = blogData.content
    const sql = `
        update blogs set title = '${title}', content = '${content}' where id = ${id}
    `
    return exec(sql).then(updateData => {
        //console.log('updateData', updateData)
        if(updateData.affectedRows >0) {
            return true
        }
        return false
    })

    return true
}

const delBlog = (id, author) => {
    // console.log(id)
    const sql =`
        delete from blogs where id = ${id} and author = '${author}'
    `
    return exec(sql).then(deleteData => {
        //console.log('deleteData', deleteData)
        if(deleteData.affectedRows >0) {
            return true
        }
        return false
    })
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog
}