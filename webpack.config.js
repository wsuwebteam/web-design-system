const webpack = require('webpack');
const path = require('path');
const args = require('./env');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = env => {
	const DEV = args.env !== 'production';

	return {
		context: __dirname,
		entry: {
			'bundles/wsu-design-system': './src/bundles/wsu-design-system.js',
			'bundles/wsu-design-system.init': './src/bundles/wsu-design-system.init.js',
			'bundles/standalone/people-list/scripts': './src/bundles/standalone/people-list/scripts.js',
			'bundles/standalone/hero-slider/scripts': './src/bundles/standalone/hero-slider/scripts.js',
			'bundles/standalone/programs-list/scripts': './src/bundles/standalone/programs-list/scripts.js',
			'bundles/standalone/scholarship-list/scripts': './src/bundles/standalone/scholarship-list/index.tsx',
			'bundles/standalone/events-list/scripts': './src/bundles/standalone/events-list/scripts.js',
			'bundles/standalone/events-cards/scripts': './src/bundles/standalone/events-cards/scripts.js',
			'bundles/standalone/degree-finder/scripts': './src/bundles/standalone/degree-finder/index.tsx',
		},
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname) + `/${args.outputDir}`
		},
		mode: DEV ? 'development' : 'production',
		devtool: DEV ? 'inline-source-map' : 'source-map',
		devServer: {
			// writeToDisk: true,
			// contentBase: path.join(__dirname),
			// overlay: true,
			// quiet: false,
			// port: 9000
			static: {
				directory: path.join(__dirname, 'test'),				
			},
			compress: true,
			port: 9000,
		},
		module: {
			rules: [
				{
					test: /\.(js|mjs)$/,
					exclude: /(node_modules|bower_components)/,
					use: [{
						loader: 'babel-loader', 
						options: {
							presets: ['@babel/preset-env']
						}
					}],
				},
				{
					test: /\.(ts|tsx|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					use: ['babel-loader'],
				},
				{
					test: /\.svg$/,
					use: ['@svgr/webpack'],
				},
			],
			noParse: /node_modules\/lodash\/lodash\.js/,
		},
		resolve: {
			extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
		},
		plugins: [
			new NodePolyfillPlugin(),
			new webpack.DefinePlugin({
				//PEOPLE_API_BASE_URL: DEV ? JSON.stringify('http://wsuwp.local') : JSON.stringify('https://people.wsu.edu')
				PEOPLE_API_BASE_URL: JSON.stringify('https://people.wsu.edu')
			})
		]
	}
};
