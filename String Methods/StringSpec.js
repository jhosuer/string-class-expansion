let string = new String();
 describe('Test for hasVowels', () => {
    it('A simple case where no vowel exist', () => {
        expect(string.hasVowels()).toBeFalsy();
    });
    const newStr = 'Joshua'.hasVowels();
    it('A simple case where Vowel is both upper and lower', () => {
        expect(newStr).toBeTruthy();
    });
 });

 describe('Test for toUpper', () => {
    it('A simple case to test that returns the string in uppercase', () => {
        expect(string.toUpper()).toBe('');
    });
    const str1 = 'Joshua'.toUpper();
    it('A simple case where Joshua is returned as an uppercase letter', () => {
        expect(str1).toBe('JOSHUA');
    });
    const str2 = 'MoSeS'.toUpper();
    it('A simple case where Joshua is returned as an uppercase letter', () => {
        expect(str2).toBe('MOSES');
    });
    const str3 = 'grEY'.toUpper();
    it('A simple case where Joshua is returned as an uppercase letter', () => {
        expect(str3).toBe('GREY');
    });
 });

 describe('Test for checking if a string returns Lower case', () => {
    it('To check if the string is empty', () => {
        expect(string.toLower()).toBe('');
    });
    const str1 = 'Joshua'.toLower();
    it('To check that Joshua is returned as a lower case', () => {
        expect(str1).toBe('joshua');
    });
    const str2 = 'JOSHUA'.toLower();
    it('To check that Joshua is returned as a lower case', () => {
        expect(str2).toBe('joshua');
    });
 });
 describe('Test if a string returns the first letter as upper case letter', () => {
    const str = 'Joshua'.UcFirst();
    it('To check if the string is empty', () => {
        expect(str).toBe('Joshua');
    });
    const str1 = 'joshua'.UcFirst();
    it('To check that Joshua is returned as a lower case', () => {
        expect(str1).toBe('Joshua');
    });
    const str2 = 'JOSHUA'.UcFirst();
    it('To check that Joshua is returned as a lower case', () => {
        expect(str2).toBe('JOSHUA');
    });
 });

 describe('Test if a string ends with a question mark or not', () => {
    const str = 'What is the meaning of Love? '.isQuestion();
    it('To test if the str above if the function passed accepted a question', () => {
        expect(str).toBeTruthy();
    });
    const str1 = 'Joshua is a man'.isQuestion();
    it('To check that the string is not a question', () => {
        expect(str1).toBeFalsy();
    });
    const str2 = "Joshua, isn't razz, is he?".isQuestion();
    it('To check that the string is a question', () => {
        expect(str2).toBeTruthy();
    });
 });

 describe('Test return a list of words as an array', () => {
    const str = 'What is the meaning of Love'.words();
    it('To test if the str above if the function passed accepted a question', () => {
        expect(str).toEqual(['What', 'is', 'the', 'meaning', 'of', 'Love']);
    });
    const str1 = 'Joshua is a man 123'.words();
    it('To check that the string is not a question', () => {
        expect(str1).toEqual(['Joshua', 'is', 'a', 'man', '123']);
    });
    const str2 = "".words();
    it('To check that the string is a question', () => {
        expect(str2).toEqual([]);
    });
 });
 describe('Test return the length of words', () => {
    const str = 'What is the meaning of Love'.wordCount();
    it('To test if the str above if the function passed accepted a question', () => {
        expect(str).toBe(6);
    });
    const str1 = 'Joshua is a man 123'.wordCount();
    it('To check that the string is not a question', () => {
        expect(str1).toBe(5);
    });
    const str2 = "".wordCount();
    it('To check that the string is a question', () => {
        expect(str2).toBe(0);
    });
 });

 describe('This returns a number representation of the Currency String', () => {
    const str = '11,111.11'.fromCurrency();
    it('To remove the comma in the first two digits', () => {
        expect(str).toBe(11111.11);
    });
    const str1 = '1,111,111.11'.fromCurrency();
    it('To check that the string is not a question', () => {
        expect(str1).toBe(1111111.11);
    });
    const str2 = '1,111,111,111,111,111'.fromCurrency();
    it('To check that the string is a question', () => {
        expect(str2).toBe(1111111111111111);
    });
    const str3 = '11,111,111,111,100'.fromCurrency();
    it('To check that the string is a question', () => {
        expect(str3).toBe(11111111111100);
    });
 });

 describe('This returns each letter in the string as an inverse of its current case', () => {
    const str = 'Joshuafad'.inverseCase();
    it('To remove the comma in the first two digits', () => {
        expect(str).toBe('jOSHUAFAD');
    });
    const str1 = 'JosAshuDFaFafad'.inverseCase();
    it('To check that the string is not a question', () => {
        expect(str1).toBe('jOSaSHUdfAfAFAD');
    });
    const str2 = 'GOt to be A group'.inverseCase();
    it('To check that the string is a question', () => {
        expect(str2).toBe('goT TO BE a GROUP');
    });
    const str3 = 'I go places like it was made from my dresses'.inverseCase();
    it('To check that the string is a question', () => {
        expect(str3).toBe('i GO PLACES LIKE IT WAS MADE FROM MY DRESSES');
    });
 });

 describe('This returns the letters in alternating cases. It must start with a lower case', () => {
    const str = 'Joshhhghhhhdhhdhaaa'.alternatingCase();
    it('To remove the comma in the first two digits', () => {
        expect(str).toBe('jOsHhHgHhHhDhHdHaAa');
    });
    const str1 = 'joghdjhdhjadbdhsfjmnsf'.alternatingCase();
    it('To check that the string is not a question', () => {
        expect(str1).toBe('jOgHdJhDhJaDbDhSfJmNsF');
    });
    const str2 = 'GonzaloHiguainThrowBack'.alternatingCase();
    it('To check that the string is a question', () => {
        expect(str2).toBe('gOnZaLoHiGuAiNtHrOwBaCk');
    });
    const str3 = 'IaintLikeGHGHHGHGHGHGHG'.alternatingCase();
    it('To check that the string is a question', () => {
        expect(str3).toBe('iAiNtLiKeGhGhHgHgHgHgHg');
    });
 });