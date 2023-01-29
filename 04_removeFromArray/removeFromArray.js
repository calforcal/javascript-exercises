/*
Get user input of an array and an element to remove for the function
Remove the element from the array given.
    Scan the array to identify the elements index in the array
    Remove the element at that index from the array.
    Return the new array
*/

const removeFromArray = function() {

    let array = arguments[0];
    let index;
    
    for (let i = 1; i < arguments.length; i++) {
        
        index = array.indexOf(arguments[i]);

        if (index != -1) {
        array.splice(index, 1);
        }

    }

    return array;


};

// Do not edit below this line
module.exports = removeFromArray;
