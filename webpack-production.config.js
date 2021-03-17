var devConfig = require('./webpack.config.js');
var WebpackStrip = require('strip-loader');
var stripLoader = {
	test: [/\.js$/, /\.es6$/],
	exclude: /node_modules/,
	loader: WebpackStrip.loader('console.log');
}

devConfig.module.loader.push(stripLoader);

module.exports = devConfig;

