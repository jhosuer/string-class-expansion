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