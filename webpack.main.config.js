const config = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules: require('./webpack.rules'),
  },
  externals: {
    'node-global-key-listener': 'node-global-key-listener'
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
};

// console.log(process.argv)
// if (process.argv.indexOf('start') !== '-1') {
//   config.externals['node-global-key-listener'] = 'node-global-key-listener'
// }


module.exports = config;