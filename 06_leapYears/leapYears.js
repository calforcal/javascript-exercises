/*
Have user input a YEAR into the function
Determine whether or not the function is a Leap Year
    Divisible by 4
    NOT leap year if divisible by 100
        unless it is also divisible by 400
*/

const leapYears = function(year) {
    if (year % 4 === 0 && year % 100 != 0) {
        return true;
    }
    else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
