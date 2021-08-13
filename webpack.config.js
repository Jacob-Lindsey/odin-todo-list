const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); /* COMMENT OUT FOR GH-PAGES */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  devServer: {
      contentBase: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/template-index.html',
      filename: 'index.html',
      title: 'Development',
      }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    /* publicPath: '/', */ /* COMMENT OUT FOR GH-PAGES */
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assests/images',
            },
          },
        ],
        test: /\.html$/,
        use: [
          'html-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};