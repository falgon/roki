const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
    mode: 'production',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/docs/js/'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: ['/node_modules/', '/assets/']
            },
            {
                test: /\.scss?$/,
                include: __dirname + '/docs/style/',
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: ['/node_modules/']
            },
            {
                test: /\.css?$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
                exclude: ['/node_modules/']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
                exclude: ['/node_modules/']
            },
            {
                test: /\.jpe?g$|\.ico$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: ['/node_modules/']
            },
            {
                test: /\.json$/,
                use: 'json-loader',
                type: 'javascript/auto',
                exclude: ['/node_modules/']
            },
            {
                test: /\.woff(\?.+)?$/,
                use: [{
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.woff2(\?.+)?$/,
                use: [{
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.ttf(\?.+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.eot(\?.+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.svg(\?.+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        outputPath: '../../assets/',
                        publicPath: __dirname + '/assets',
                        emitFile: true
                    }
                }],
                exclude: ['/node_modules/']
            },
            {
                test: /\.png$/,
                use: 'url-loader?mimetype=image/png&name=[path][name].[ext]',
                exclude: ['/node_modules/']
            },
            {
                test: /\.gif$/,
                use: 'url-loader?mimetype=image/gif&name=[path][name].[ext]',
                exclude: ['/node_modules/']
            }
            //    { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader:'tslint-loader' } // FIXME: https://github.com/wbuchwalter/tslint-loader/issues/57
        ],
    },
    performance: { hints: false }
};
