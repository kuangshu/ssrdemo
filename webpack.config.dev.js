const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map', // 开发的时候方便调试查看代码
    entry: {
        main: [
        'webpack-dev-server/client?http://localhost:8080', // 监听8080端口socket通信
        'webpack/hot/dev-server', // HRM更新时刷新整个页面，如果是only-dev-server是手动刷新
        path.join(__dirname, 'app/main.js')
        ]
    },
    output: {
        filename: 'bundle.js',
        publicPath: 'http://localhost:8080/build/', // webpack-dev-server伺服的文件是相对publicPath这个路径的
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        // 定义了解析模块路径时的配置，常用的就是extensions，可以用来指定模块的后缀，这样在引入模块时就不需要写后缀了，会自动补全
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/, //可以使用exclude来排除一部分文件
                loader: 'babel' // 这里热加载的时候需要把react-hot-loader/babel加到.babelrc文件的plugin里面
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url?limit=8192'
            },
            {// 使用 extract-text-webpack-plugin就可以把样式文件从js中独立抽离出来
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'less-loader')
            }
        ]
    },
    plugins: [
        // NoErrorsPlugin用于保证编译后的代码永远是对的，因为不对的话会自动停掉。
        new webpack.optimize.NoErrorsPlugin(),
        // OccurenceOrderPlugin的作用是给经常使用的模块分配最小长度的id
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name]-[hash].css'),
        new webpack.HotModuleReplacementPlugin(),
        // 查找相等或近似的模块，避免在最终生成的文件中出现重复的模块
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};