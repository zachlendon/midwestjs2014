var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: {
     bundle: ["!bootstrap-webpack!./app/bootstrap.config.js",
    "./app/main.js"],
   },
  output: {
    //where to put build results when doing prod builds
    path: __dirname,

    //JS filename used in HTML
    filename: "public/bundle.js"
  },
  module: {
    cache: true,
    loaders: [
    // required to write "require('./style.css')"
        { test: /\.css$/,    loader: "style-loader!css-loader" },

        // required for bootstrap icons
        { test: /\.woff$/,   loader: "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff" },
        { test: /\.ttf$/,    loader: "file-loader?prefix=font/" },
        { test: /\.eot$/,    loader: "file-loader?prefix=font/" },
        { test: /\.svg$/,    loader: "file-loader?prefix=font/" },

        // required for react jsx
        // pass *.jsx files through jsx-loader transform
        {test: /\.js$/, loader: 'jsx-loader?insertPragma=React.DOM'},
        { test: /\.jsx$/,   loader: "jsx-loader?insertPragma=React.DOM" },

        // Inject React in global for react dev tools
        { test: /react\/addons\.js/, loader: "expose?React" }
    ]
  },

      externals: {
        // Showdown is not in node_modules,
        // so we tell Webpack to resolve it to a global
        'showdown': 'window.Showdown'
      },

    resolve: {
        root: [path.join(__dirname, 'web_modules')],
        // Allow to omit extensions when requiring these files
        extensions: ['', '.js', '.jsx'],
        alias: {
            'react$': 'react/addons.js',
            jquery: 'jquery/dist/jquery'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            // Automatically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
        }),
    ]
};
