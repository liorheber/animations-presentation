// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

module.exports = {
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
        {
            test: /\.md$/,
            loader: "raw"
        }, {
            test: /\.json$/,
            loader: 'json'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        },
        {
            test: /\.scss$/,
            loaders: [
                "style-loader",
                "css-loader?modules&importLoaders=1&localIdentName=kn-[name]__[local]___[hash:base64:5]",
                "sass-loader"
            ]
        }
    ],
  },
};
