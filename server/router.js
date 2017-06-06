import Router from 'koa-router';
import packageConfig from '../package.json';

const homepage = packageConfig.homepage;
const router = new Router({
    prefix: homepage.substr(0, homepage.length - 1),
});

const api = new Router();
api.get('/', async (ctx) => {
    ctx.body = '<div>api!</div>'
});

const page = new Router();
page.get('/', async(ctx) => {
    console.log(ctx.url);
    ctx.body = '<div>index!</div>'
});
page.get('/home', async(ctx) => {
    console.log(ctx.url);
    ctx.body = '<div>hallo world!</div>'
});


router.use('/api', api.routes());
router.use('/h5', page.routes());
router.get('*', async(ctx) => {
    console.log(ctx.url);
    ctx.body = '<div>404 Not Found!</div>'
});

export default router;