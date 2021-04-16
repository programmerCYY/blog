//引用express框架
const express=require('express');
// 导入bcrypt
const bcrypt = require('bcrypt');
//导入用户集合构造函数
const {User}=require('../model/user')
//创建博客页面展示路由
const admin = express.Router();


// 渲染登录页面
admin.get('/login', require('./admin/loginPage'));

// 实现登录功能
admin.post('/login', require('./admin/login'));

// 创建用户列表路由
admin.get('/user', require('./admin/userPage'));

// 实现退出功能
admin.get('/logout', require('./admin/logout'));
//添加新用户界面（用户编辑界面）
admin.get('/user-edit', require('./admin/user-edit'));
//提交用户表单
admin.post('/user-edit',require('./admin/user-edit-fn'))
// 用户修改功能路由
admin.post('/user-modify', require('./admin/user-modify'));
// 用户删除功能路由
admin.get('/delete', require('./admin/user-delete'));


// 文章列表页面路由
admin.get('/article', require('./admin/article'));

// 文章编辑页面路由
admin.get('/article-edit', require('./admin/article-edit'));

// 实现文章添加功能的路由
admin.post('/article-add', require('./admin/article-add'))

//实现文章删除功能路由
admin.get('/article-delete', require('./admin/article-delete'))

//实现文章修改功能
admin.post('/article-modify',require('./admin/article-modify'))
// admin.get('/article',((req, res) =>
//         res.render('admin/article')
// ));


//把路由暴露出去
module.exports=admin;