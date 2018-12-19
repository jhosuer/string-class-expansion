require(StringSpec);

describe("has Vowel", function() {
    it("has vowel", function() {
        expect("abc".repeat(2)).toEqual("abcabc");
        expect("abc".repeat(0)).toEqual("");
    });
});

