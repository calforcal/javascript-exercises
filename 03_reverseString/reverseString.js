/*
Get string input for function reverseString
Reverse the String
    Use for loop to iterate through each letter in the string
        Starting with string index equal to length - 1.
        Slice last character and set index equal to 0 or (i).
*/


const reverseString = function(string) {
    let array = string.split("");
    let reversedArray = array.reverse();

    let reversedString = reversedArray.join("");

    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
