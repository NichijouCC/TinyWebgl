const path = require('path');
module.exports = {
    mode: 'development',
    entry: './src/main.ts',//唯一入口文件
    output: {
        filename: 'main.js',//打包后输出文件的文件名
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        publicPath: '/dist/'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                // For our normal typescript
                test: /\.ts?$/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ],
                exclude: /(?:node_modules)/,
            },
        ]
    },
    resolve: {
        modules: [
            'src',
            'node_modules'
        ],
        extensions: [
            '.js',
            '.ts'
        ]
    },
    devServer: {
        // contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        hot: true,
        compress: true,
        host: 'localhost',
        port: 8877
    }
};
