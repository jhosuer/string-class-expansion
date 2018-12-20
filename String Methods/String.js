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

    String.prototype.toCurrency = function(){

    }
    
    
    String.prototype.fromCurrency = function() {
        let a = this.split('');
        let b = [];
        a.forEach((value) => {
          if(value == ',') {
            b.push('');
          }
          else {
            b.push(value);
          }
        })
        let c = b.join('');
        return Number(c);
      
      }
      String.prototype.inverseCase = function() {
        let str = Object.values(this).join('');
      
          let result = [];
        for(index = 0; index < str.length; index++) {
          if(str[index] === str[index].toLower()) {
              result.push(str[index].toUpper());
          }
          else if(str[index] === str[index].toUpper()) {
            result.push(str[index].toLower());
          }
          else {
            result.push(str[index]);
          }
        }
        let nResult = result.join('');
        return nResult;
      }

      String.prototype.alternatingCase = function() {
        let str = Object.values(this).join('');
        let result = [];
        let newStr = str.split('');
        newStr.forEach((value,index) => {
          if(index === 0) {
            result.push(value.toLowerCase());
          }
          else if(index % 2 == 0) {
            result.push(value.toLowerCase());
          }
          else {
            result.push(value.toUpperCase());
          }
        });
        let nRes = result.join('');
        return nRes;
      }

      String.prototype.numberWords = function() {
        let num = Object.values(this).join('');
       let digit = ['zero','one', 'two', 'three','four','five','six','seven','eight','nine']; 
        let newAr = [];
        for(let index = 0; index < num.length; index++) {
          for (let jdex = 0; jdex < digit.length; jdex++) {
            if(num[index] == jdex) {
              newAr.push(digit[jdex]);
             }
          }
        }
       let res = newAr.join(' ');
       return res;
      }
      
      
module.exports = String;