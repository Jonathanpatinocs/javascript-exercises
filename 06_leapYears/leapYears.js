const leapYears = function(num = 0) {
    if (num%4 === 0 && num%100 !== 0 || num%400 === 0 ) {
        return true;
    }
    else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
