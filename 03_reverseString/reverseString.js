const reverseString = function(string = "string") {
    let x = [];
    let rev = "";
    for ( let i = 0; i < string.length ; i++) {
        x.push(string.charAt(i));
    }
    
    while ( x.length > 0 ) {
        rev += x.pop();
    }
    return rev;
};

// Do not edit below this line
module.exports = reverseString;
