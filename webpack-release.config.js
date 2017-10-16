const webpack = require('webpack');

module.exports = {
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
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
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
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css?$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
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
                }]
            },
            {
                test: /\.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
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
                }]
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
                }]
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
                }]
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
                }]
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
                }]
            },
            {
                test: /\.png$/,
                use: 'url-loader?mimetype=image/png&name=[path][name].[ext]'
            },
            {
                test: /\.gif$/,
                use: 'url-loader?mimetype=image/gif&name=[path][name].[ext]'
            }
            //    { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader:'tslint-loader' } // FIXME: https://github.com/wbuchwalter/tslint-loader/issues/57
        ],
        loaders: [{
            exclude: '/node_modules/'
        }, ],
    },
};
