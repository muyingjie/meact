const webpack = require('webpack');
const config = require('../webpack.config.js');
const WebpackDevServer = require("webpack-dev-server");

config.entry.unshift("webpack-dev-server/client?http://localhost:8099/");

const compiler = webpack(config);
const server = new WebpackDevServer(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    },
    hot: true
});
server.listen(8099);