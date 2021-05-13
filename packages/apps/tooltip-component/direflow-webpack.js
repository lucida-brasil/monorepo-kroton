const { webpackConfig } = require('direflow-scripts');

module.exports = (config, env) => ({
  ...webpackConfig(config, env, {
    React: false,
    ReactDOM: false,
  }, {
    module: { 
      rules: [{ test: /\.tsx$/, use: 'raw-loader' }]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  }),
});
