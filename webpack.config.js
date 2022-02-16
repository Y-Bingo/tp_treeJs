const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	cache: {
		type: 'filesystem',
		store: 'pack',
		compression: 'gzip',
	},
	entry: './src/index.ts',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
		extensions: ['.ts', '.js', 'glsl'],
	},
	module: {
		rules: [
			// TS
			{
				test: /.ts$/,
				use: ['ts-loader'],
				exclude: /node_modules/,
			},
			// Images
			// {
			// 	test: /\.(jpg|png|gif|svg)$/,
			// 	use: [
			// 		{
			// 			loader: 'file-loader',
			// 			options: {
			// 				outputPath: 'assets/images/',
			// 			},
			// 		},
			// 	],
			// 	exclude: /node_modules/,
			// },
			// Shaders
			{
				test: /\.(glsl|vs|vert|frg)$/,
				exclude: /node_modules/,
				use: ['raw-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tree Js',
			filename: 'index.html',
			template: './index.html',
			inject: 'body',
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, './'),
		},
		devMiddleware: {
			// writeToDisk: true,
		},
		static: './',
		compress: true, //如果为 true ，开启虚拟服务器时，为你的代码进行压缩。加快开发流程和优化的作用
		host: 'localhost', // 设置主机名，默认为"localhost"
		port: 9933, // 设置端口号,默认端口号为8080
		historyApiFallback: true, //让所有404错误的页面定位到index.html
		hot: 'only',
		liveReload: false,
		open: false, //启动服务器时，自动打开浏览器，默认为false
	},
};
