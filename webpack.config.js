var webpack = require('webpack');
var path = require('path');

var banner = `
 Copyright 2016
 Pilyugin Alexey

 This file is part of Voice ART.

 Voice ART is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 Voice ART is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with Voice ART.  If not, see <http://www.gnu.org/licenses/>.
 `;

var buildPath = path.resolve(__dirname, './build');
var node_modules = path.resolve(__dirname, 'node_modules');
function removeDashes(str){
    return str?str.replace('-',''):'';
}
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        'VoiceController': ['./voice-controller'],
        'VoiceCommander': ['./voice-controller/commander'],
        'ItemRenderer': ['./item-renderer']
    },
    resolve: {
        alias:{
            'cg-slider': 'cl-slider'
        }
    },
    output: {
        path: buildPath,
        publicPath: './',
        filename: './js/[name].js',
        chunkFilename: './js/[id].js',
        library: ["VoiceArt", "[name]"],
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.BannerPlugin(banner),
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: 2
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'style!css!less'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
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
};