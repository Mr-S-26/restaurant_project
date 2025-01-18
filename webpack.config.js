const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'main.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Set mode to 'development' for now
};
 
