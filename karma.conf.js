// karma.conf.js
module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
        'test/**/*.spec.js'
        ],
        preprocessors: {
        'test/**/*.spec.js': ['webpack', 'sourcemap']
        },
        webpack: {
        mode: 'development',
        module: {
            rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                    '@babel/preset-env',
                    ['@babel/preset-react', { runtime: 'automatic' }]
                    ]
                }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },
        devtool: 'inline-source-map'
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity
    });
};