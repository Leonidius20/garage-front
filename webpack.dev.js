const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        liveReload: true,
        hot: true,
        open: true,
        contentBase: path.join(__dirname, 'dist')
    },
});