(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.trimNl = function(inString) {
    if (!inString) return inString;
    return inString.replace(/[\r\n]/g, '');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trimNl;
  }
})();
