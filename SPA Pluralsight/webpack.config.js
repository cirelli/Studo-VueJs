const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { VueLoaderPlugin } = require('vue-loader')

const bundleOutputDir = './wwwroot/dist'

module.exports = (env) => {
  return [{
    mode: 'development',
    stats: { modules: false },
    context: __dirname,
    entry: { app: './ClientApp/client-entry.js' },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader'
          ],
          include: /ClientApp/
        }
      ]
    },
    output: {
      path: path.join(__dirname, bundleOutputDir),
      filename: 'assets/js/[name].js',
      publicPath: 'dist/'
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({ filename: 'assets/css/[name].css' })
    ]
  }]
}
