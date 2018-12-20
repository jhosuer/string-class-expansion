 describe('Test for hasVowels', () => {
    let string = new String();
    it('A simple case where no vowel exist', () => {
        expect(string.hasVowels()).toBeFalsy();
    });
    const newStr = 'Joshua'.hasVowels();
    it('A simple case where Vowel is both upper and lower', () => {
        expect(newStr).toBeTruthy();
    });
 });

 describe('Test for hasVowels', () => {
    let string = new String();
    it('A simple case where no vowel exist', () => {
        expect(string.hasVowels()).toBeFalsy();
    });
    const newStr = 'Joshua'.hasVowels();
    it('A simple case where Vowel is both upper and lower', () => {
        expect(newStr).toBeTruthy();
    });
 });