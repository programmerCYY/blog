module.exports = async (req, res) => {
    // 标识 标识当前访问的是文章管理页面
    req.app.locals.currentLink = 'article';
    // 渲染文章列表页面模板
    res.render('admin/article-edit.art');
}