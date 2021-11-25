const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }/*,
            {
                test: /\.html$/i,
                loader: 'html-loader',
            }*/
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            appMountId: 'app',
            filename: 'index.html',
            template: './src/assets/index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: "./src/assets/auto-complete.css", to: "./" },
                { from: "./src/assets/auto-complete.min.js", to: "./" },
            ],
        })
    ]
};

module.exports = config;