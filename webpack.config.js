const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './clientside/start.js',
    output: {
        filename: './clientside/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    },
	watchOptions: {
		ignored: /node_modules/
	},
};
