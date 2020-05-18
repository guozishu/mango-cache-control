const Koa = require('koa');
const cacheControl=require('../index');
const app = new Koa();

app.use(cacheControl({
    maxAge:100
}));

app.use(async (ctx, next) => {
    ctx.body='hello world!';
    await next();
});

app.listen(3000);
console.log('http://localhost:3000/');