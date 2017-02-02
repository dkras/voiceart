module.exports = function (config) {
    config.set({
        autoWatch: false,
        basePath: '',
        browsers: ['Chrome'],
        files: [
            'tests.webpack.js'
        ],

        frameworks: ['jasmine'],
        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-webpack'
        ],
        preprocessors: {
            'tests.webpack.js': ['webpack']
        },
        webpack: {
            resolve: {
                extensions: ['', '.js']
            },
            module: {
                loaders: [
                    {
                        test: /\.less$/,
                        loader: 'style!css!less'
                    },
                    {
                        test: /\.(png|mp3|woff|woff2|eot|otf|ttf|svg|jpg)((\?)?.*)$/i,
                        loader: "url-loader?limit=100000&name=res/[hash].[ext]"
                    },
                    {
                        test: /\.js$/,
                        exclude: /(node_modules|bower_components)/,
                        loader: 'babel',
                        query: {
                            presets: ['es2015'],
                            plugins: ['add-module-exports']
                        }
                    }
                ]
            }
        }

    });
};