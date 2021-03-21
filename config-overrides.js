const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    '@App': 'src/app',
    '@Assets': 'src/assets',
    '@Assets/*': 'src/assets/*',
    '@Components': 'src/components',
    '@Components/*': 'src/components/*',
    '@Containers': 'src/containers',
    '@Containers/*': 'src/containers/*',
  })(config);

  return config;
};