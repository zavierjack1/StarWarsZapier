const starWarsPeople = require('./triggers/StarWarsPeople.js');
const starWarsActionCreate = require('./creates/star_wars_action.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  triggers: { [starWarsPeople.key]: starWarsPeople },
  creates: { [starWarsActionCreate.key]: starWarsActionCreate },
};
