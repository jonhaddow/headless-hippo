import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
	entry: ['./src/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: ['ts-loader'],
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: true,
							reloadAll: true
						}
					},
					{
						loader: 'typings-for-css-modules-loader',
						options: {
							modules: true,
							namedExport: true,
							camelCase: true,
							importLoaders: 1
						}
					}, 
					{
						loader: 'postcss-loader'
					}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader'],
				exclude: /node_modules/
			}
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx'],
		symlinks: false
	},
	output: {
		path: path.resolve(__dirname, 'dist/'),
		filename: 'bundle.js',
		publicPath: '/'
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
		new webpack.HotModuleReplacementPlugin(),
		new webpack.WatchIgnorePlugin([
			/css\.d\.ts$/
		]),
		new MiniCssExtractPlugin()
	]
};