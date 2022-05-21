const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  describe("does it encrypt", () => {
    it("should encode a message", () => {
      const input = "hello";
      const actual = polybius(input);
      const expected = "3251131343";

      expect(actual).to.equal(expected);
    });

    it("i and j should both be 42", () => {
      const input = "jingle";
      const actual = polybius(input);
      const expected = "424233221351";

      expect(actual).to.equal(expected);
    });

    it("does it work with spaces", () => {
      const input = "hello world";
      const actual = polybius(input);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("does it decrypt", () => {
    it("it should decrypt this", () => {
      const input = "3251131343";
      const actual = polybius(input, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("does it return (i/j)", () => {
      const input = "424233221351";
      const actual = polybius(input, false);

      expect(actual).to.include("i/j");
    });

    it("does it decrypt with spaces", () => {
      const input = "3251131343 2543241341";
      const actual = polybius(input, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

  });
});
