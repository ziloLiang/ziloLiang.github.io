/**
 * @file extrat dev config
 */

var webpack = require('webpack');
var HappyPack = require('happypack');

var config = require('./config');

var webpackConfig = {
    entry: {
        core: [
            'react',
            'react-dom',
            'react-router'
        ],
        blog: './src/App.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: config.releasePath
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: '/node_modules/',
                loaders: ['babel'],
                happy: {id: 'js'},
                include: config.basePath
            },
            {
                test: /\.(jpg|png|ttf|svg|gif|woff2?)(\?.+)?$/,
                loader: 'url?limit=10240',
                include: config.basePath
            },
            {
                test: /\.less?$/,
                loader: 'style!css!less',
                include: config.basePath
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.CommonsChunkPlugin('core', 'core.min.js'),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false
            }
        }),
        new HappyPack({
            id: 'js',
            cache: true
        })
    ]
};

module.exports = webpackConfig;