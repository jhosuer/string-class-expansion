String.prototype.hasVowels = function() {
    let str = '';
    let checker = /(a|e|i|o|u)/i;
    str = Object.values(this).join('');
    return checker.test(str);
  }

module.exports = String;