const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devtool: 'none',
    target: 'electron-main',
    entry: {
        index: './src/main/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, '../dist')
    },
    // webpack 对 __dirname 进行了处理. 所以需要禁用.
    // https://www.webpackjs.com/configuration/node/#node-__dirname
    node: {
        __dirname: false,
        __filename: false
    }
}