const path = require('path');

module.exports = env => {
    return {
        mode: env,
        devtool: 'none',
        target: 'electron-main',
        entry: {
            index: './src/main/index.js'
        },
        output: {
            filename: '[name].js',
            path: path.join(__dirname, '../dist')
        },
        module: {
            rules: [
              {
                test: /\.js$/,
                type: "javascript/esm",
                exclude: /node_modules/,
              }
            ]
        }
    }
}