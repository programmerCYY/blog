const mongoose=require('mongoose');
mongoose.connect('mongodb://cyy:690301@localhost:27017/blog')
.then(()=>{console.log("数据库连接成功")})
.catch(()=>{console.log("数据库连接失败")})