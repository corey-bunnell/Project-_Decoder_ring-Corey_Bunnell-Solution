// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // I created an array of objects to assign each letter of the alphabet with 
    // the value assigned to the value according to the Polybius square provided.
    // I created an extra with (i/j) assigned to the value of 42 since i and j were given the same value.
    const alphabet = [
      {key: "a", value: "11"},
      {key: "b", value: "21"},
      {key: "c", value: "31"},
      {key: "d", value: "41"},
      {key: "e", value: "51"},
      {key: "f", value: "12"},
      {key: "g", value: "22"},
      {key: "h", value: "32"},
      {key: "(i/j)", value: "42"},
      {key: "j", value: "42"},
      {key: "i", value: "42"},
      {key: "k", value: "52"},
      {key: "l", value: "13"},
      {key: "m", value: "23"},
      {key: "n", value: "33"},
      {key: "o", value: "43"},
      {key: "p", value: "53"},
      {key: "q", value: "14"},
      {key: "r", value: "24"},
      {key: "s", value: "34"},
      {key: "t", value: "44"},
      {key: "u", value: "54"},
      {key: "v", value: "15"},
      {key: "w", value: "25"},
      {key: "x", value: "35"},
      {key: "y", value: "45"},
      {key: "z", value: "55"}
    ];
    // I created an empty string to hold the encrypted or decrypted message
    let finalMessage = "";
    // This if statement will check if the string needs to be encrypted of decrypted
    if (encode === true) { 
    // I created a lower case version of the string pushed through the function 
      let lowerCase = input.toLowerCase();  
    // I have a for loop to run through each charachter in the string 
      for (let i = 0; i < lowerCase.length; i++) {
    // I am using the charCodeAt method within my if statement to see if 
    // the indexed character is within the assigned codes for a and b.
        if(97 <= lowerCase[i].charCodeAt(0) && lowerCase[i].charCodeAt(0) <= 122) {
    // I use the find method to return the object that matches
          const found = alphabet.find((letter) => letter.key === lowerCase[i]);
    // Then its reduced down to just the value of the object. The encryted value.
        const number = found.value;
    // Then it will be concantenated with the finalMessage string.
          finalMessage += number;
        } else {
    // If the character is outside the above charCodeAt value it will be concantenated with the finalMessage string.
    // This is to keep all spaces and other characters in the message.
          finalMessage += lowerCase[i];
        }      
      }
    // This is the other half of the first if statement checking for encrypting or decrypting.
    } else {
    // I first split the string entering into the function and join it back together to remove the spaces.
      let checkForOdd = input.split(" ").join("");
    // I then run it through an if statement to check if its an odd number.
      if (checkForOdd.length%2==1) {
    // If its odd it will return false
        return false;
    // If its even it will then start to decrypt the message
      } else {
    // I have a for loop increasing by increments of two since the above object values are two digits long.
      for (let i = 0; i < input.length; i+=2) {
    // I have this if statement checking if the first index value is a space.
    // Using the charCodeAt method to check the value.
        if ((input[i].charCodeAt(0)) == 32) {
    // If the first character is a space it will then add the space to the finalMessage string
          finalMessage += input[i];
    // Then it will decrease the index by one
          i-=1;
    // If there is no space it will proceed with decrypting
        } else {
    // Using the substr method to pull two digits starting at the index value
        const pulled = input.substr(i,2);
    // Then it will decrypt similar to encypting
        const found = alphabet.find((letter) => letter.value === pulled);
        const number = found.key;
        finalMessage += number;
        }
      }
    }
  }
  // Then it will return the encrypted message or decrypted message
    return finalMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
