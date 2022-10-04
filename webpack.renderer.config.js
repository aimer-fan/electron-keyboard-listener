const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const { VueLoaderPlugin } = require('vue-loader')
const webpack = require('webpack')

rules.push(
  {
    test: /\.css$/,
    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
  },
  {
    test: /\.vue$/,
    loader: 'vue-loader',
  },
);

plugins.push(
  new VueLoaderPlugin(),
  new webpack.DefinePlugin({
    __VUE_OPTIONS_API__: false,
    __VUE_PROD_DEVTOOLS__: false
  }),
)

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.vue'],
  },
};
