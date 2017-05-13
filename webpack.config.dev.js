import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


export default {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'webpack-hot-middleware/client?reload=true', //hot reloading
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']
            },
            {
                test: /\.css\?global$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            },
            {
                test: /\.css$/, loaders: ['style-loader','css-loader?modules&localIdentName=[local]---[hash:base64:5]']
            },
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {
                test: /\.(jpe?g|png|gif)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=9&interlaced=false'
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('styles.css'),

    ],
    watch: true
}