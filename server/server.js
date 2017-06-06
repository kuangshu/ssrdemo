import Koa from 'koa';
import views from 'koa-views';
import Static from 'koa-static';
import path from 'path';
import router from './router';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Root } from '../src/main'

const app = new Koa();
app.use(Static(path.join(__dirname, '../build')));
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
app.use(router.routes(), router.allowedMethods());
app.use(async (ctx) => {
    //console.log(ctx);
    const context = {};
    const html = ReactDOMServer.renderToString(
        <StaticRouter
            location={ctx.url}
            context={context}
        >
            <Root />
        </StaticRouter>
    );
    ctx.response.body = `
        <!doctype html>
        <head>
            <script>
            window.__initState = ${JSON.stringify(
                {store: {
                    todo: [{
                        completed:false,
                        text:"sssss"
                    }],
                }}
            )}
            </script>
        </head>
        <body>
            <div id="app">${html}</div>
            <script src='bundle.js'></script>
        </body>
    `;
});
app.listen(3000);