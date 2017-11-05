const path = require('path');
const webpack = require('webpack');

module.exports={
    entry: './index.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module:{
        loaders: [{
            test: /\.js?$/,
            exclude: /nodule_modules/,
            loader: 'babel-loader',
            query:{
            presets:['react','es2015'], 
            }
        }]
    },
    devtool: 'inline-source-map',

}