const webpack = require('webpack');

module.exports = {
    devtool: 'eval-source-map',
    entry: `${__dirname}/src/main.js`,
    output: {
        path: `${__dirname}/build`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
};