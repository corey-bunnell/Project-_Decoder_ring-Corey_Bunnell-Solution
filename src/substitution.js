// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // These are my first checks to see if an alphabet was entered as well as if an alphabet was shorter then 26. If either were true
    // then it would return false.
    if (!alphabet || alphabet.length != 26) return false;
    // This is a for loop to run through the alphabet entered to check for duplicate characters.
    for (let i = 0; i < alphabet.length; i++) {
      // This is to create another string minus the characters already checked and the one being used.
      let filter = alphabet.substr(1+i,26-i);
      // This if statement checks if the newly created string includes the indexed character.
      if (filter.includes(alphabet[i])) return false;
    }
    // I created an array of objects. The key is set to the letters in the traditional alphabet and the values
    // are set to the alphabet pushed through the function.
    const cipher = [
      {key: "a", value: `${alphabet[0]}`},
      {key: "b", value: `${alphabet[1]}`},
      {key: "c", value: `${alphabet[2]}`},
      {key: "d", value: `${alphabet[3]}`},
      {key: "e", value: `${alphabet[4]}`},
      {key: "f", value: `${alphabet[5]}`},
      {key: "g", value: `${alphabet[6]}`},
      {key: "h", value: `${alphabet[7]}`},
      {key: "i", value: `${alphabet[8]}`},
      {key: "j", value: `${alphabet[9]}`},
      {key: "k", value: `${alphabet[10]}`},
      {key: "l", value: `${alphabet[11]}`},
      {key: "m", value: `${alphabet[12]}`},
      {key: "n", value: `${alphabet[13]}`},
      {key: "o", value: `${alphabet[14]}`},
      {key: "p", value: `${alphabet[15]}`},
      {key: "q", value: `${alphabet[16]}`},
      {key: "r", value: `${alphabet[17]}`},
      {key: "s", value: `${alphabet[18]}`},
      {key: "t", value: `${alphabet[19]}`},
      {key: "u", value: `${alphabet[20]}`},
      {key: "v", value: `${alphabet[21]}`},
      {key: "w", value: `${alphabet[22]}`},
      {key: "x", value: `${alphabet[23]}`},
      {key: "y", value: `${alphabet[24]}`},
      {key: "z", value: `${alphabet[25]}`}
    ];

    
    // I created an empty string to hold the encrypted or decrypted message
    let finalMessage = "";
    // I created a lower case version of the string pushed through the function
    let lowerCase = input.toLowerCase();
    // This if statement will check if the string needs to be encrypted of decrypted
    if (encode === true) { 
    // I have a for loop to run through each charachter in the string    
      for (let i = 0; i < lowerCase.length; i++) {
    // Im using an if statment to check if the character exists in the cipher
        if (cipher.some((code) => code.key === lowerCase[i])) {
    // If it exists I use the find method to return the object that matches
        const found = cipher.find((letter) => letter.key === lowerCase[i]);
    // Then its reduced down to the just the value of the object. The encryted value.
        const code = found.value;
    // It will them be concantenated with the finalMessage string.
        finalMessage += code;
        } else {
    // If the character doesn't exist in the cipher it will be concantenated with the finalMessage string.
    // This is to keep all spaces and other characters as part of the message.
          finalMessage += lowerCase[i];
        }
      }
    // This is the other half of the if statement checking for encryting or decrypting the message.
    } else { 
    // This code is the same as above. It works in the opposite way.   
      for (let i = 0; i < lowerCase.length; i++) {
        if (cipher.some((code) => code.value === lowerCase[i])) {
        const found = cipher.find((letter) => letter.value === lowerCase[i]);
        const code = found.key;
        finalMessage += code;
        } else {
        finalMessage += lowerCase[i];
        }
      }
    } 
    // At the end of it the function will return the finalMessage. Whether its encrypted of decrypted.  
    return finalMessage;
  }


  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
