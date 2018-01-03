var path = require("path");
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dst"),
        filename: "app.min.js"
    },
    module: {
        loader: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["env"]
            }
        }]
    }
};