import Koa from 'koa';
import views from 'koa-views';
import path from 'path';

const app = new Koa();

app.use(require('koa-static')(path.join(__dirname, '../build')));
app.use(views(path.join(__dirname, '../views'), {
    extension: 'jsx',
    map: {
        jsx: 'react',
    }
}));
app.use(async (ctx, next) => {
    const start = new Date();
    await next();
    const ms = new Date() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});
app.use(async (ctx) => {
    await ctx.render('index', {
        store: {
            todo: [{
                completed:false,
                text:"sssss"
            }],
        }
    });
});
app.listen(3000);