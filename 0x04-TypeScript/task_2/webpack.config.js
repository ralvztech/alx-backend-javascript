
Curriculum
Short Specializations
Average: 93.43%
0x04. Typescript
JavaScript
TypeScript
 Weight: 1
 Ongoing second chance project - started Jul 31, 2024 6:00 AM, must end by Aug 3, 2024 6:00 AM
 Manual QA review must be done (request it when you are done with the project)


Resources
Read or watch:

TypeScript in 5 minutes
TypeScript documentation
Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

Basic types in Typescript
Interfaces, Classes, and functions
How to work with the DOM and Typescript
Generic types
How to use namespaces
How to merge declarations
How to use an ambient Namespace to import an external library
Basic nominal typing with Typescript
Requirements
Allowed editors: vi, vim, emacs, Visual Studio Code
All your files should end with a new line
All your files will be transpiled on Ubuntu 18.04
Your TS scripts will be checked with jest (version 24.9.* )
A README.md file, at the root of the folder of the project, is mandatory
Your code should use the ts extension when possible
The Typescript compiler should not show any warning or error when compiling your code
Configuration Files
Please use these files for the following tasks

package.json
Click to show/hide file contents
.eslintrc.js
Click to show/hide file contents
tsconfig.json
Click to show/hide file contents
webpack.config.js
Click to show/hide file contents

const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
  entry: "./js/main.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  devServer: {
    contentBase: "./dist"
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Development"
    })
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
