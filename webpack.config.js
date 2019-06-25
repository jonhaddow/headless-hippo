const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: {
					loader: 'ts-loader'
				},
				include: path.resolve(__dirname, './src')
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
				include: path.resolve(__dirname, './src')
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
				include: path.resolve(__dirname, './src')
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		symlinks: false
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist/'),
		port: 3000,
		historyApiFallback: true,
		hot: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/assets/index.html',
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
