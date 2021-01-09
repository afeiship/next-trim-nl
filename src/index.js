(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.trimNl = function (inString) {
    if (!inString) return inString;
    return inString.replace(/[\r\n]/g, '');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trimNl;
  }
})();
