//引用express框架
const express=require('express');
//创建博客页面展示路由
const home = express.Router();

home.get('/',((req, res) =>
       res.send('欢迎来到博客首页')
));
//把路由暴露出去
module.exports=home;