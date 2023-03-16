const { registerHelper } = require('handlebars');
const handlebars = require('handlebars');

module.exports = function registerHelper(){
  handlebars.registerHelper('user', function() {
    return this.user;
  });
};