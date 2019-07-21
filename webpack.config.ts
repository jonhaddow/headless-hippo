import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack, { Configuration } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: Configuration = {
	entry: [ './src/index.tsx' ],
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				loader: 'ts-loader',
				include: [ path.resolve(__dirname, 'src') ]
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
				],
				include: [
					path.resolve(__dirname, 'src'),
					/node_modules\/normalize.css/
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: 'file-loader',
				include: [ path.resolve(__dirname, 'src/assets') ]
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
		hot: true,
		stats: 'errors-warnings'
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
	],
	stats: 'errors-warnings'
};

export default config;