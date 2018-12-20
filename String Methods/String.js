String.prototype.hasVowels = function() {
    let checker = /(a|e|i|o|u)/i;
    return checker.test(this);
  }

String.prototype.toUpper = function(){
    let pointer = this.split('');
    let resultGroup = [];
    for(let index = 0; index < pointer.length; index++) {
        if((this[index].charCodeAt() >= 97) && (this[index].charCodeAt() <= 121)) {
            let asciiRep = this[index].charCodeAt() - 32;
            resultGroup.push(String.fromCharCode(asciiRep));  
        }else{
            resultGroup.push(this[index]);
        }
    }
    let result = resultGroup.join('');
    return result;
}


String.prototype.toLower = function() {
    let pointer = this.split('');
    let resultGroup = [];
    for(let index = 0; index < pointer.length; index++) {
        if((this[index].charCodeAt() >= 65) && (this[index].charCodeAt() <= 90)) {
        let asciiRep = this[index].charCodeAt() + 32;
        resultGroup.push(String.fromCharCode(asciiRep));  
        }
        else{
        resultGroup.push(this[index]);
        }
    }
    let result =resultGroup.join('');
    return result;
}


String.prototype.UcFirst = function(){
    let pointer = Object.values(this).join('');
    if(pointer[0] == pointer[0].toUpperCase()){
        pointer = pointer;
    }
    else {
        pointer = pointer.replace(pointer[0], pointer[0].toUpperCase());
    }
    return pointer;
}


String.prototype.isQuestion = function() {
    let question = /\?$/;
    return question.test(this.trim());
}
    

String.prototype.words = function() {
    let pointer = Object.values(this).join('');
    let checker = /(\w+)(?:\s+)/;
    let initialResult = pointer.split(checker);
    let result = [];
    for(let value of initialResult) {
        if(value !== '') {
            result.push(value);
        }
    }
    return result;
}
      

String.prototype.wordCount = function() {
    let result = this.words();
    return result.length;
}

String.prototype.toCurrency = function(){

}
    
    
String.prototype.fromCurrency = function() {
    let input = this.split('');
    let resultGroup = [];
    input.forEach((value) => {
        if(value == ',') {
        resultGroup.push('');
        }
        else {
        resultGroup.push(value);
        }
    })
    let result = resultGroup.join('');
    return Number(result);

}
String.prototype.inverseCase = function() {
    let input = Object.values(this).join('');
    let resultGroup = [];
    for(index = 0; index < input.length; index++) {
        if(input[index] === input[index].toLower()) {
            resultGroup.push(input[index].toUpper());
        }
        else if(input[index] === input[index].toUpper()) {
        resultGroup.push(input[index].toLower());
        }
        else {
        resultGroup.push(input[index]);
        }
    }
    let result = resultGroup.join('');
    return result;
}

String.prototype.alternatingCase = function() {
    let input = Object.values(this).join('');
    let resultGroup = [];
    let inputGroup = input.split('');
    inputGroup.forEach((value,index) => {
        if(index === 0) {
            resultGroup.push(value.toLowerCase());
        }
        else if(index % 2 == 0) {
            resultGroup.push(value.toLowerCase());
        }
        else {
            resultGroup.push(value.toUpperCase());
        }
    });
    let result = resultGroup.join('');
    return result;
}

String.prototype.numberWords = function() {
    let input = Object.values(this).join('');
    let digit = ['zero','one', 'two', 'three','four','five','six','seven','eight','nine']; 
    let resultGroup = [];
    for(let index = 0; index < input.length; index++) {
        for (let indexOne = 0; indexOne < digit.length; indexOne++) {
            if(input[index] == indexOne) {
                resultGroup.push(digit[indexOne]);
            }
        }
    }
    let result = resultGroup.join(' ');
    return result;
}

String.prototype.isDigit = function() {
    let numberChecker = /^\d{1}$/;
    return numberChecker.test(this);
}

module.exports = String;