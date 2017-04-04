/**
 * Created by brendaortega on 31/03/17.
 */
var webpack = require('webpack');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        filename: "docs/bundle.min.js"
    },
    watch: false,
    module:{
        rules: [

            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loaders: ['babel-loader']
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?modules&localIdentName=[local]---[hash:base64:5]']
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.(woff|woff2)$/, loader: 'file-loader'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'}

        ],
    },

    devServer: {
        contentBase: 'docs'
    }
    // plugins: [
    // 	new webpack.optimize.UglifyJsPlugin()
    // ]
}