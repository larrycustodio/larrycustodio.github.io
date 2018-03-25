const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

const htmlWebpackPluginConfig = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

const cssWebpackPluginConfig = new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
});

module.exports = {
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader }, 
                    {
                        loader: 'css-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.woff2?$/,
                loader: 'url-loader',
                options: {
                    limit: 50000,
                    mimetype: 'application/font-woff',
                    name: './fonts/[name].[ext]',
                }
            },
        ]
    },

    plugins: [htmlWebpackPluginConfig, cssWebpackPluginConfig],

    cache: false,

    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
};