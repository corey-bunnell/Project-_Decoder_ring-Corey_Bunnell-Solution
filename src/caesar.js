// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  
  function caesar(input, shift, encode = true) {
    // Initial check to see if the shift is set to zero or if its greater then 25
    // or lower then 25. If any are true it will return false
    if (shift === 0 || shift < -25 || shift > 25) return false;
    // Created an array of objects assigning the letters of the alphabet to the value between 0 and 25
    const alphabet = [
      {key: "a", value: 0},
      {key: "b", value: 1},
      {key: "c", value: 2},
      {key: "d", value: 3},
      {key: "e", value: 4},
      {key: "f", value: 5},
      {key: "g", value: 6},
      {key: "h", value: 7},
      {key: "i", value: 8},
      {key: "j", value: 9},
      {key: "k", value: 10},
      {key: "l", value: 11},
      {key: "m", value: 12},
      {key: "n", value: 13},
      {key: "o", value: 14},
      {key: "p", value: 15},
      {key: "q", value: 16},
      {key: "r", value: 17},
      {key: "s", value: 18},
      {key: "t", value: 19},
      {key: "u", value: 20},
      {key: "v", value: 21},
      {key: "w", value: 22},
      {key: "x", value: 23},
      {key: "y", value: 24},
      {key: "z", value: 25}
    ];
    // I created an empty string to hold the encrypted or decrypted message
    let finalMessage = "";
    // I created a lower case version of the string pushed through the function
    let lowerCase = input.toLowerCase();
    // This if statement will check if the string needs to be encrypted of decrypted
    if (encode === true) {    
    // I have a for loop to run through each charachter in the string 
      for (let i = 0; i < lowerCase.length; i++) {
    // I am using the charCodeAt method within my if statement to see if 
    // the indexed character is within the assigned codes for a and b.
        if(97 <= lowerCase[i].charCodeAt(0) && lowerCase[i].charCodeAt(0) <= 122) {
    // I use the find method to return the object that matches
        let found = alphabet.find((letter) => letter.key === lowerCase[i]);
    // Then its reduced down to just the value of the object. The encryted value.
        let number = found.value;
    // Then that number is added to the shift value
          let alteredNum = (number += shift);
    // I have an if statement to check if the value is less then 0 or greater then 25
    // if so then it will be added to or subtracted to 26 to accomedate a wrap around effect
            if (alteredNum < 0) alteredNum += 26;
            if (alteredNum > 25) alteredNum -= 26;
    // Then it will use the find method to pull the object matching the new value
          let refound = alphabet.find((num) => num.value === alteredNum);
    // Will then be reduced to just the key value
          let converted = refound.key; 
    // It will then be added to the finalMessage string;
          finalMessage += converted;
    // Other half of the above if statement checking for the charCode values
        } else {
    // Will concantenate the spaces or other characters to the finalMessage
          finalMessage += input[i];
        }       
      }
    // Other half of the first if statement checking for encrypting or decrypting
    } else {
    // This code works the same as the encrypting version with just subtracting the shift value
      for (let i = 0; i < lowerCase.length; i++) {
        if(97 <= lowerCase[i].charCodeAt(0) && lowerCase[i].charCodeAt(0) <= 122) {
        let found = alphabet.find((letter) => letter.key === lowerCase[i]);
        let number = found.value;
          let alteredNum = (number -= shift);
            if (alteredNum < 0) alteredNum += 26;
            if (alteredNum > 25) alteredNum -= 26;
          let refound = alphabet.find((num) => num.value === alteredNum);
          let converted = refound.key; 
          finalMessage += converted;
        } else {
          finalMessage += input[i];
        }       
      }
    }
    return finalMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
