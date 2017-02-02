'use strict';

var gulp = require('gulp');
var gutil = require("gulp-util");
var clean = require('gulp-clean');
var path = require('path');
var karma = require('karma');
var fs = require('fs');
var exec = require('child_process').exec;

var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require('./webpack.config.js');

var srcPath = path.resolve(__dirname, './src');
var buildPath = path.resolve(__dirname, './build');
var staticPath = path.resolve(srcPath, './static');

gulp.task('clean-js', function () {
    return gulp.src(webpackConfig.output.path + '/js').
        pipe(clean());
});

gulp.task('clean-static', function () {
    var itemsToClear = [];
    var items = fs.readdirSync(staticPath);
    for (var i = 0; i < items.length; i++) {
        itemsToClear.push(path.resolve(buildPath, './' + items[i]));
    }

    return gulp.src(itemsToClear).
        pipe(clean());
});

gulp.task('clean-libs', function () {
    return gulp.src([path.resolve(buildPath, './libs')]).
        pipe(clean());
});

gulp.task('clean-all', ['clean-js', 'clean-static', 'clean-libs']);

gulp.task('build-js', ['clean-js', 'webpack:build']);

gulp.task('build-all', ['copy-static', 'update-deps', 'build-js']);

gulp.task('webpack:build', function (callback) {
    var wpConfig = Object.create(webpackConfig);

    // run webpack
    webpack(wpConfig, function (err, stats) {
        if (err) {
            throw new gutil.PluginError('webpack:build', err);
        }
        gutil.log('[webpack:build]', stats.toString({
            colors: true
        }));
        callback();
    });
});

gulp.task('copy-libs', ['clean-libs'], function () {
    return gulp.src(['./bower_components/**', '!./bower_components/**/src/**', '!./bower_components/**/docs/**', '!./bower_components/**/examples/**', '!./bower_components/**/bower.json'])
        .pipe(gulp.dest(buildPath + '/libs'));
});

gulp.task('copy-static', ['clean-static', 'copy-libs'], function () {
    return gulp.src(staticPath + '/**')
        .pipe(gulp.dest(buildPath));
});

gulp.task('webpack-dev-server', ['clean-js', 'copy-static'], function () {
    var wpConfig = Object.create(webpackConfig);

    for (var key in wpConfig.entry) {
        if (wpConfig.entry.hasOwnProperty(key)) {
            var entry = wpConfig.entry[key];
            // if type of entry is string it should be changed by array
            if (typeof entry == 'string') {
                entry = [entry];
            }
            entry.push('webpack/hot/dev-server');
        }
    }
    wpConfig.devtool = 'eval';
    wpConfig.debug = true;
    wpConfig.plugins = wpConfig.plugins.concat(
        new webpack.HotModuleReplacementPlugin()
    );

    var compiler = webpack(wpConfig);

    var server = new WebpackDevServer(compiler, {
        contentBase: './build',
        publicPath: '/js',
        hot: true,
        watchOptions: {
            aggregateTimeout: 300
        },
        historyApiFallback: true
    });
    server.listen(9090, 'localhost', function (err) {
        if (err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]',
            'http://localhost:9090/webpack-dev-server/index.html');
    });
});

gulp.task('test', function (done) {
    new karma.Server({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('watch', function () {
    gulp.watch([srcPath + '/**/*.js', srcPath + '/**/*.less'], ['webpack:build']);
});


gulp.task('update-deps', function (cb) {
    exec('npm update', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
})