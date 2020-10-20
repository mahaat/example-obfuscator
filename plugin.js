const merge = require('webpack-merge');
const WebpackObfuscator = require('webpack-obfuscator');
exports.default = {
  config: function (cfg) {
    // Function to add obfuscator plugin to build steps
    const strategy = merge.strategy({
      plugins: 'append'
    })

    const config = strategy(cfg, {
      plugins: [new WebpackObfuscator({
        optionsPreset: 'low-obfuscation',
        // you can add another options
      }, ['*', '!main*'])], // only main bundle getting obfuscated
    });
    return config;
  },
};
