const removeFromArray = function(array = [], num = undefined, num2 = undefined, num3 = undefined, num4 = undefined) {
    for (let i = 0; i < array.length ; i++) {
        if (array[i] === num || array[i] === num2 || array[i] === num3 || array[i] === num4) {
            array.splice(i, 1);
            i--;
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
