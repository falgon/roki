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
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },
            {
                test: /\.(jpg|jpeg)$/,
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
                test: /.html$/,
                use: 'raw-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.woff(\?.+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.woff2(\?.+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.ttf(\?.+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.eot(\?.+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.svg(\?.+)?$/,
                use: 'file-loader'
            },
            {
                test: /\.png$/,
                use: 'url-loader?mimetype=image/png'
            },
            {
                test: /\.gif$/,
                use: 'url-loader?mimetype=image/gif'
            }
            //    { enforce: 'pre', test: /\.tsx?$/, exclude: /node_modules/, loader:'tslint-loader' } // FIXME: https://github.com/wbuchwalter/tslint-loader/issues/57
        ],
        loaders: [{
            exclude: '/node_modules/'
        }, ],
    },
};
