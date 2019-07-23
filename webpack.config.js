const path=require('path')
const HtmlWebpackPlugin=require('html-webpack-plugin')
const htmlwebpackplugin=new HtmlWebpackPlugin({
    template: path.join(__dirname,'./public/index.html'),
    filename: 'index.html'
})

module.exports={
    mode:'development',
    plugins: [
        htmlwebpackplugin
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.js','.jsx','.json']
    }
}