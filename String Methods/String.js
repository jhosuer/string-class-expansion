/*This function checks if a vowel exist in a string. Call it using the string.hasVowels(); method*/ 
String.prototype.hasVowels = function() {
    let checker = /(a|e|i|o|u)/i;
    return checker.test(this);
  }

/*This function returns a given string in upper case. Call it using the string.toUpper(); method*/ 
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

/*This function returns a given string in lower case. Call it using the string.toLower(); method*/ 
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

/*This function returns a given string in with the first character in upper case format. Call it using the string.toUcFirst(); method*/

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


/*This function checks if a string is actually a question or not. Call it using the string.isQuestion(); method*/ 
String.prototype.isQuestion = function() {
    let question = /\?$/;
    return question.test(this.trim());
}
    
/*This function returns a given string in an array format. Call it using the string.words(); method*/ 
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
      
/*
This function returns a given number of words from a given string. Call it using the string.wordCount(); method
*/ 
String.prototype.wordCount = function() {
    let result = this.words();
    return result.length;
}

/*
This function converts a given string in to a currency format. Call it using the string.toCurrency(); method
*/ 
String.prototype.toCurrency = function(){

}
    
/*This function returns a given given currency without the formatiing. Call it using the string.fromCurrency(); method*/
     
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

/*
This function returns the given of a given string. Call it using the string.inverseCase(); method
*/ 
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


/*
This function returns a given string with the first letter as a lowercase but with the remaining as an alternate of the first. Call it using the string.alternatingCase(); method
*/ 
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


/*
This function returns a given number as the word representation. Call it using the string.numberWords(); method
*/
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

/*
This function checks if a given function has more than one number or not. Call it using the string.isDigit(); method
*/

String.prototype.isDigit = function() {
    let numberChecker = /^\d{1}$/;
    return numberChecker.test(this);
}

module.exports = String;