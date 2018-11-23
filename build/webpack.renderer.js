const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = env => {
    return {
        mode: env,
        devtool: 'none',
        entry: {
            main: './src/renderer/main.js',
        },
        target: env == 'development' ? 'web' : 'electron-renderer',
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, '../dist')
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    use: 'vue-loader'
                },
                {
                    test: /\.styl(us)?$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'stylus-loader'
                    ]
                }
            ]
        },
        plugins: [
            new VueLoaderPlugin(),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/renderer/index.html'),
                filename: 'index.html'
            }),
            new CleanWebpackPlugin('./dist/*', {
                root: path.resolve(__dirname, '../')
            }),
        ],
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all"
                    }
                }
            }
        }
    }
}
