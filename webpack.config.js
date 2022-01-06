const webpack = require('webpack');
const path = require('path');
const args = require('./env');

module.exports = env => {

	const DEV = args.env !== 'production';

	return {
		context: __dirname,
		entry: {
			'bundles/wsu-design-system': './src/bundles/wsu-design-system.js',
			'bundles/wsu-design-system.init': './src/bundles/wsu-design-system.init.js',
			'bundles/standalone/people-list/scripts': './src/bundles/standalone/people-list/scripts.js',
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname) + `/${args.outputDir}`
		},
		mode: DEV ? 'development' : 'production',
		devtool: DEV ? 'inline-source-map' : 'source-map',
		devServer: {
			writeToDisk: true,
			contentBase: path.join(__dirname),
			overlay: true,
			quiet: false,
			port: 9000
		},
		module: {
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					}
				}
			],
		},
		plugins: [
			new webpack.DefinePlugin({
				PEOPLE_API_BASE_URL: DEV ? JSON.stringify('http://wsuwp.local') : JSON.stringify('https://people.wsu.edu')
			})
		]
	}
};