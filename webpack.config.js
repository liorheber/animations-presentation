const path = require('path');
const webpack = require('webpack');

const babelLoader = {
	use: 'babel-loader',
	test:  /\.js$/,
	exclude: /node_modules/

};

const cssLoader = {
	use: ["style-loader", "css-loader?modules&importLoaders=1&localIdentName=kn-[name]__[local]___[hash:base64:5]", "sass-loader"],
	test: /\.scss$/
};

module.exports = {
	entry: {index: './src/index.js'},

	output: {
		path: path.resolve('out'),
		publicPath: 'out',
		filename: '[name].js',
	},

	module: {
		rules: [babelLoader, cssLoader]
	},

};