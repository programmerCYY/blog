const { Article } = require('../../model/article');

module.exports = async (req, res) => {
    // 标识 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    // 渲染文章列表页面模板
    //res.render('admin/article-edit.art');
    const { id } = req.query;

    // 如果当前传递了id参数
    if (id) {
        // 修改操作
        let article = await Article.findOne({_id: id});

        // 渲染文章编辑页面(修改)
        res.render('admin/article-edit', {
            //message: message,
            article: article,
            link: '/admin/article-modify?id=' + id,
            button: '修改'
        });

    }else {
        // 添加文章操作
        res.render('admin/article-edit', {
            //message: message,
            link: '/admin/article-add',//使用link在提交表单的时候加以区分
            button: '添加'
        });
    }
}
