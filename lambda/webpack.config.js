// Exclude node_modules from being included in the bundle
var nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: './src/handler.js',
  target: 'node',
  externals: [nodeExternals()],
  modules: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: '.webpack',
    filename: 'handler.js'
  }
}
