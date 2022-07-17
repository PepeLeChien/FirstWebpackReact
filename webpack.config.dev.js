const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rulesForHtml = {
    test: /\.html$/,
    use: ['html-loader'],
}

const rulesForCss = {
    test: /\.s?[ac]ss/,
    use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader'],
}

const rulesForJavascript = {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
}
const rules = [
    rulesForJavascript,
    rulesForHtml,
    rulesForCss,
    ]


module.exports = {

    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
    },
    resolve: {
        extensions: ['.js','.jsx']
    },
    module: {rules},
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3006,
    }
}