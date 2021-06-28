const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    entry: {
        '/components/global-header/dist': './components/global-header/src/build'
    },
    output: {
        path: path.resolve(__dirname),
        filename: './[name]/script.js'
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: './[name]/component.html',
        inject: false,
        minify: false,
        template: path.resolve(__filename) + './template.html',
      })
    ]
  }