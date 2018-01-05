const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const DefinePlugin = require('webpack/lib/DefinePlugin');
// 根据html模板生成项目的模板页并在编译完成之后放到目标目录中
const {WebPlugin} = require("web-webpack-plugin");

module.exports = {
    devtool: 'source-map',
    entry: {
        app: "./src/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./dst"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 将css写入行间用style-loader组件
                // use: ['style-loader', 'css-loader']
                use: ExtractTextPlugin.extract({
                    use: ['css-loader']
                })
            },
            {
                test: /\.js$/,
                use: ['env', 'react']
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: `[name]_[contenthash:8].css`
        }),
        // 根据html模板生成项目的模板页并在编译完成之后放到目标目录中
        new WebPlugin({
            // 模板所在目录
            template: './index.html',
            // 编译之后的html名字
            filename: 'index.html'
        }),
        new DefinePlugin({
            "process.env": {
                NODE_ENV: 'production'
            }
        })
    ]
};