const path = require('path')

module.exports = {
  mode:'production',
  entry:{
    RUI: './lib/index.tsx'
  },
  output:{
    path: path.resolve(__dirname, 'dist/lib'),
    library: 'RUI',
    libraryTarget: 'umd',

  },
  module:{
    rules:[
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
}