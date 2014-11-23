/**
 * Module Dependencies
 */

var path      = require('path');
var transform = require('coffee-react').compile;
var through   = require('through');

/**
 * Exports
 */

var Transformers = {};

Transformers.source = transform;

Transformers.coffeeify = function(file, options) {
  var source  = '';

  return through(function(data) {
    source += data;
  }, function() {
    var result;

    try {
      result = Transformers.source(source, options);
    } catch (error) {
      error.message += ' in "' + file + '"';

      this.emit('error', error);
    }

    this.queue(result);
    this.queue(null);
  });
};

module.exports = Transformers;