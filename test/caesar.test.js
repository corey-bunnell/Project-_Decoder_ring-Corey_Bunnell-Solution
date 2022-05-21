const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
    describe("testing errors", () => {
      it("shift amount is 0", () => {
        const input = "hello";
        const shift = 0;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("shift amount is 25", () => {
        const input = "hello";
        const shift = 26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
  
      it("shift amount is -25", () => {
        const input = "hello";
        const shift = -26;
        const actual = caesar(input, shift);
  
        expect(actual).to.be.false;
      });
    });
  
    describe("encrypting and decrypting", () => {
      it("does the basics and goes off the edge", () => {
        const input = "zero";
        const shift = 4;
        const actual = caesar(input, shift);
        const expected = "divs";
  
        expect(actual).to.equal(expected);
      });
  
      it("goes in reverse and allows spaces/special characters", () => {
        const input = "A zero.";
        const shift = -4;
        const actual = caesar(input, shift);
        const expected = "w vank.";
  
        expect(actual).to.equal(expected);
      });
  
      it("decrypt", () => {
        const input = "e divs.";
        const shift = 4;
        const actual = caesar(input, shift, false);
        const expected = "a zero.";
  
        expect(actual).to.equal(expected);
      });
    });
  });
  