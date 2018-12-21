#String Extension

##Description
```JavaScript
Extending the String​ class in Javascript. Using Prototype Oriented Programming,
methods, procedures and instance attributes are added to the String class to support more string
manipulation features. Listed below are a list of the methods to be added to the string class.
```
###Methods
```JavaScript
let string = new String();
```

```JavaScript
hasVowels (typeof ​Boolean​): Returns true if the string contains vowels.
####Test
expect(string.hasVowels()).toBeFalsy();
expect(stringOne).toBeTruthy();
```

```Javascript
❏ toUpper (typeof ​String​)​: ​Returns the String in question but with all characters in upper
cases as applicable.
####Test
expect(string.toUpper()).toBe('');
expect(stringOne).toBe('MOSES');
```
```JavaScript
❏ toLower (typeof ​String​)​: ​Returns the String in question but with all characters in their lower cases as applicable. 
####Test
expect(string.toLower()).toBe('');
expect(stringOne).toBe('joshua');
```
```JavaScript
❏ ucFirst (typeof ​String​): Returns the String in question but changes the First Character to an Upper case.
####Test
expect(string).toBe('Joshua');
expect(stringOne).toBe('Joshua');
```
```JavaScript
❏ isQuestion (typeof ​Boolean​)​: ​This method returns true if the string is a question (ending with a question mark). 
####Test
expect(string).toBeTruthy();
expect(stringOne).toBeFalsy();
```
```JavaScript
❏ words​: ​This method returns a list of the words in the string, as an Array.
####Test
expect(string).toEqual(['What', 'is', 'the', 'meaning', 'of', 'Love']);
expect(stringOne).toEqual(['Joshua', 'is', 'a', 'man', '123']);
```
```JavaScript
❏ wordCount (typeof ​Number​): This method returns the number of words in the string. ​It makes use of the ​words​ method above.
####Test
expect(string).toBe(6);
expect(stringOne).toBe(5);
```
```JavaScript
❏ toCurrency (typeof ​String​)​: ​This method returns a currency representation of the String e.g 11111.11 is represented as 11,111.11.
####Test
```
```JavaScript
❏ fromCurrency (typeof ​Number​): This method returns a number representation of the Currency String
e.g 11,111.11 returns 11111.11
####Test
expect(string).toBe(11111.11);
expect(stringOne).toBe(1111111.11);
```
```JavaScript
❏ inverseCase (typeof String): This method returns each letter in the string as an inverse of its current case e.g Mr. Ben returns mR. bEN.
####Test
expect(string).toBe('jOSHUAFAD');
expect(strOne).toBe('jOSaSHUdfAfAFAD');
```
```JavaScript
alternatingCase (typeof String): This method returns the letters in alternating cases. It starts with a lower case e.g Onomatopoeia returns oNoMaToPoEiA.
####Test
expect(string).toBe('jOsHhHgHhHhDhHdHaAa');
expect(stringOne).toBe('jOgHdJhDhJaDbDhSfJmNsF');
```
```JavaScript
numberWords (typeof String): This method returns the numbers in words e.g 325 returns three
two five.
####Test
expect(string).toBe('five six seven');
expect(stringOne).toBe('five six zero zero zero six zero seven');
```
```JavaScript
❏ isDigit (typeof Boolean): This method returns true if the string is a digit(one number) e.g 3 should returns true and 34 returns false.
####Test
expect(string).toBeFalsy();
expect(stringOne).toBeTruthy();
```