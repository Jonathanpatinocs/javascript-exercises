const repeatString = function(string = "string", num) {
    if (num < 0) return "ERROR";
    let x = "";
    for (let i = 0; i < num; i++) {
        x = x + string;
    }
    return x;
};

// Do not edit below this line
module.exports = repeatString;
