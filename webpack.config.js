let path = require('path');
module.exports = {
	entry: './app.jsx',
	output: {
		path: path.resolve('build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				options: {
					presets: ['es2015', 'react']
				}
			},
			{ 
				test: /\.jsx$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/, 
				options: {
					presets: ['es2015', 'react']
				}
			}
		]
	}
}