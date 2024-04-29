function makesAdders(valueToAdd) {
    return function (number) {
        return number + valueToAdd;
    };
}
;
var addNine = (makesAdders(9));
console.log(addNine(7));
