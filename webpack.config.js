const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'JmEditor.main.js'
    },
    devServer: {
        contentBase: './dist',
        host: 'localhost',
        port: '8085',
        open: true
    },
    watchOptions: {
        poll: 1000,//监测修改的时间(ms)
        //aggregeateTimeout: 500, //防止重复按键，500毫米内算按键一次
        ignored: /node_modules/,//不监测
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },

            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }


        ]
    },
    resolve: {
        extensions: [
            '.ts'
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};