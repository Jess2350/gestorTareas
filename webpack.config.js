const path = require('path');

module.exports = {
    entry: './src/index.js', //Punto de entrada
    output: {
       filename: 'bundle.js', // Nombre del archivo de salida 
       path: path. path.resolve(__dirname, 'dist'), // Carpeta de salida
    }, 
    module: {
       rules: [
          {
              test: /\.css$/, // Regex para identificar archivos CSS 
              use: ['style-loader', 'css-loader'], // Loaders para procesar archivos CSS
          },
          {
              test: /\.js$/, // Regex para identificar archivos JS
              exclude: /node_modules/, // Excluir la carpeta node_modules
              use: {
                  loader: 'babel-loader', // Loader para pasar JS moderno a Js mas antiguo para todos los navegadores
                  options: {
                      presents: ['@babel/preset-env'],
                  },
              },
          },
       ],
    },
    devtool: 'source-map', // Generar source maps para facilitar la depuracion
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'), // Carpeta principal del servidor
        compress: true, // Habilitar la compresion gzip
        port: 9000, //Puerto del servidor de desarrollo
    },
};
