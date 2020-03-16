const Koa = require('koa')//引入Koa

const app = new Koa();   //实例化Koa

const mongoose = require('mongoose')
const {connect , initSchemas} = require('./database/init.js')

//--------------连接数据库--------------------------
;(async () =>{
  await connect()
  initSchemas()

})()
//------------------------------------------------
app.use(async (ctx) => {    //使用app
    ctx.body = 'hola'       //ctx就是context上下文,是Koa自带的对象
})
app.listen(3000,()=>{
  console.log('running at prot 3000');
});