var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test:    /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap!sass-loader?sourceMap'
                })
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: 'css-loader?sourceMap'
                })
            },
            {
                test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "url-loader?mimetype=application/font-woff&limit=10000"
            },
            {
                test: /\.(ttf|eot|svg|gif|png)(\?v=[0-9].[0-9].[0-9])?$/,
                loader: "file-loader?name=[name].[ext]"
            }
        ]
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.scss']
    },

    plugins: [
        new ExtractTextPlugin('main.css'),
        new webpack.ProvidePlugin({
            'Promise': 'es6-promise',
            'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
        })
    ]
};