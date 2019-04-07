const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        Twebgl: "./src/Twebgl.ts",
        main: "./src/main.ts"
    },
    output: {
        filename: '[name].js',//打包后输出文件的文件名
        path: path.resolve(__dirname, 'dist'),//打包后的文件存放的地方
        publicPath: '/dist/',
        library: 'Twebgl',
        libraryTarget: 'umd'
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
    plugins: [
        new DtsBundlePlugin()
    ],
    devServer: {
        // contentBase: "./public",//本地服务器所加载的页面所在的目录
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        // hot: true,
        // compress: true,
        host: 'localhost',
        port: 8877
    }
};

function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler)
{
    compiler.plugin('done', function ()
    {
        var dts = require('dts-bundle');
        var rootDir = path.resolve(__dirname);
        dts.bundle({
            name: 'test',
            main: rootDir + '/dist/**/*.d.ts',
            out: rootDir + '/dist/Twebgl.d.ts',
            removeSource: true,
            outputAsModuleFolder: true,
            exclude: []
        });
    });
};
