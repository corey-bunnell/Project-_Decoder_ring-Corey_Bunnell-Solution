const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
  describe("checking for errors and testing various things", () => {
    it("missing alphabet", () => {
      const input = "hello";
      const actual = substitution(input);
      expect(actual).to.be.false;
    });

    it("pushing less then 26 characters for alphabet", () => {
      const input = "hello";
      const alphabet = "notEnough";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });

    it("checks for doubles", () => {
      const input = "hello";
      const alphabet = "abcdabcdabcdabcdabcdabcdab";
      const actual = substitution(input, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("does it encrypt", () => {
    it("does it work with anything", () => {
      const input = "hello";
      const alphabet = "eswaqp&mohvygctfxk#ijburdz";
      const actual = substitution(input, alphabet);
      const expected = "mqyyt";

      expect(actual).to.equal(expected);
    });

    it("does it work with spaces", () => {
      const input = "hello world";
      const alphabet = "eswaqp&mohvygctfxk#ijburdz";
      const actual = substitution(input, alphabet);
      const expected = "mqyyt utkya";

      expect(actual).to.equal(expected);
    });
  });

    it("does it decrypt", () => {
      const input = "mqyyt utkya";
      const alphabet = "eswaqp&mohvygctfxk#ijburdz";
      const actual = substitution(input, alphabet, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

});
