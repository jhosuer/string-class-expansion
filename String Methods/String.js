String.prototype.hasVowels = function() {
    let str = '';
    let checker = /(a|e|i|o|u)/i;
    str = Object.values(this).join('');
    return checker.test(str);
  }

  String.prototype.toUpper = function(){
    let str = Object.values(this).join('');
    let strNew = str.split('');
    let strN = [];
    for(let index = 0; index < strNew.length; index++) {
      if((str[index].charCodeAt() >= 97) && (str[index].charCodeAt() <= 121)) {
        let a = str[index].charCodeAt() - 32;
      strN.push(String.fromCharCode(a));  
      }
      else{
        strN.push(str[index]);
      }
    }
    let nn = strN.join('');
    return nn;
  }


  String.prototype.toLower = function() {
    let str = Object.values(this).join('');
    let strNew = str.split('');
    let strN = [];
    for(let index = 0; index < strNew.length; index++) {
      if((str[index].charCodeAt() >= 65) && (str[index].charCodeAt() <= 90)) {
        let a = str[index].charCodeAt() + 32;
      strN.push(String.fromCharCode(a));  
      }
      else{
        strN.push(str[index]);
      }
    }
    let nn =strN.join('');
    return nn;
  }


  String.prototype.UcFirst = function(){
    let str = Object.values(this).join('');
      if(str[0] == str[0].toUpperCase()){
        str = str;
      }
      else {
        str = str.replace(str[0], str[0].toUpperCase());
      }
      return str;
    }


    String.prototype.isQuestion = function() {
        let str = Object.values(this).join('');
        let question = /\?$/;
        return question.test(str.trim());
      }
      

      String.prototype.words = function() {
        let str = Object.values(this).join('');
        let checker = /(\w+)(?:\s+)/;
        let initialResult = str.split(checker);
        let c = [];
        for(let d of initialResult) {
            if(d !== '') {
                c.push(d);
            }
        }
    return c;
    }
      

    String.prototype.wordCount = function() {
        let cumb = Object.values(this).join('');
        let newNumber = cumb.words();
        return newNumber.length;
    }
      
module.exports = String;