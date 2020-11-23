/*!
 * name: @jswork/next-trim-nl
 * description: Trim enter/return char.
 * homepage: https://github.com/afeiship/next-trim-nl
 * version: 1.0.0
 * date: 2020-11-24 07:35:37
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.trimNl = function (inString) {
    if (!inString) return inString;
    return inString.replace(/[\r\n]/g, '');
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.trimNl;
  }
})();
