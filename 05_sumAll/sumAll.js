/*
Get two numbers from user input for function. numOne and numTwo
Create variable big
Create variable small
Reassign the variables based on which one is larger
    IF numOne is greater than numTwo
        Set big equal numOne
        Set small equal to numTwo
    ELSE IF numTwo greater than numOne
        Set big equal to numTwo
        Set small equal to numOne
Add every number between and including the two numbers provided.
Create a variable SUM
    Create a loop that iterates through every number
        Starting the loop at i equal to numOne
        For each iteration add i to SUM
        return SUM
*/ 

const sumAll = function(numOne, numTwo) {

    let big;
    let small;
    let sum = 0;

    if (typeof numOne != "number" || typeof numTwo != "number") {
        return "ERROR";
    }
    else if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    }
    else if (numOne > numTwo) {
        big = numOne;
        small = numTwo;
    }
    else if (numTwo > numOne) {
        big = numTwo;
        small = numOne;
    }

    for (let i = small; i <= big; i++) {
        sum += i;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
