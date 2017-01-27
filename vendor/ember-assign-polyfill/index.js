/* globals Ember, require*/

(function() {
  var _Ember;

  if (typeof Ember !== 'undefined') {
    _Ember = Ember;
  } else {
    _Ember = require('ember').default;
  }

  if (!_Ember.assign) {
    _Ember.assign = function(...objects) {
      return objects.reduce(Ember.merge);
    };
  }
})();
