const webpack = require('webpack')
var path = require('path')
module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.join(__dirname, "public"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        port: "9000",
        watchContentBase: true,
        // clientLogLevel: 'debug'
    },
    module: {
        rules: [{
            test: /\.js/,
            // loader: "babel-loader",
        },
        {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "sass-loader",
            }]
        }]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
    ],
    // resolve: {
    //     modules: ['node_modules'],
    //     alias: {
    //         'owl.carousel': 'owl.carousel/dist/owl.carousel.min.js',
    //     }
    // }
};
