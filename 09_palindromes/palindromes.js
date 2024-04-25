const palindromes = function (string) {
    let array = [];
    let array2 = [];
    string = string.toLowerCase();
    for (let i = string.length; i >= 0; i--) {
        array.push(string.charAt(i));
    }
    for (let i = 0; i < string.length + 1; i++) {
        array2.push(string.charAt(i));
    }
    
    array = array.filter((char) =>  char != ' ');
    array = array.filter((char) => typeof char != 'number');
    array = array.filter((char) =>  char != '!' && char != '.' && char != ',');
 
    array2 = array2.filter((char) =>  char != ' ');
    array2 = array2.filter((char) => typeof char != 'number');
    array2 = array2.filter((char) =>  char != '!' && char != '.' && char != ',');
    newString = ''
    stringg = ''
    for (let i = 0; i < array.length; i ++) {
        newString += array[i];
    }
    for (let i = 0; i < array.length; i ++) {
         stringg += array2[i];
    }
    
    if (newString === stringg) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
