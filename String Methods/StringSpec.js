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
        expect(str).toBe(['What', 'is', 'the', 'meaning', 'of', 'Love']);
    });
    const str1 = 'Joshua is a man 123'.words();
    it('To check that the string is not a question', () => {
        expect(str1).toBe(['Joshua', 'is', 'a', 'man', '123']);
    });
    const str2 = "".words();
    it('To check that the string is a question', () => {
        expect(str2).toBe([]);
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