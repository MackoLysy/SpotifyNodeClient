var path = require("path");
var DIST_DIR = path.resolve(__dirname, "public");
var SRC_DIR = path.resolve(__dirname, "src");


var config = {
    entry: SRC_DIR + '/main.jsx',
    output: {
        path: DIST_DIR + "/js",
        filename: 'bundle.js',
    },
    module: {
        rules: [{
                test: /\.jsx$/,
                include: SRC_DIR,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.s[c|a]ss$/,
                use: ['style-loader', "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"],
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
    }
}
module.exports = config;