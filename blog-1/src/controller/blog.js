const getList = (author, keyword) => {
    //返回假数据
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1579596944979,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            createTime: 1579596964421,
            author: 'lisi'
        },
    ]
}

const getDetail = (id) => {
    //先返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        createTime: 1579596944979,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    //blogData包括标题，内容
    console.log('newBlog blogData.....', blogData)
    return {
        id: 3//表示新建博客，插入到数据表里面的id
    }
}

const updateBlog = (id, blogData = {}) => {
    console.log('update blog....', id,blogData)

    return true
}
module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog
}