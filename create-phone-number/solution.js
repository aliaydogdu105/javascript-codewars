// #Create Phone Number

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(numbers) {
  let areaCode = "";
  let exchangeCode = "";
  let lineNumber = "";
  for (let i = 0; i < numbers.length; i++) {
    if (i < 3) {
      areaCode += numbers[i].toString();
    } else if (i >= 3 && i < 6) {
      exchangeCode += numbers[i].toString();
    } else if (i >= 6) {
      lineNumber += numbers[i].toString();
    }
  }
  return `(${areaCode}) ${exchangeCode}-${lineNumber}`;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
