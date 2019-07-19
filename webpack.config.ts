import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const config: webpack.Configuration = {
	mode: 'production',
	entry: ['./src/index.tsx'],
	module: {
		rules: [
			{
				test: /\.(t|j)sx?$/,
				use: ['ts-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', {
					loader: 'typings-for-css-modules-loader',
					options: {
						modules: true,
						namedExport: true,
						camelCase: true
					}
				}]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: ['file-loader']
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
		])
	]
};

export default config;