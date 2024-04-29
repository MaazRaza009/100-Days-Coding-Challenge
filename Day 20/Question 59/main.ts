// first, we make function to add a specific number
function makesAdders(valueToAdd: number): (number) => number{
// this is the magic box. It takes specific number to add the special number
    return function(number: number): number{
        return number + valueToAdd
    };
};
// Now, we make a magic box to add "9"
let addNine = (makesAdders(9));
console.log(addNine(7));
// then, we put "7" in the box. 
// It gives us "16".
// Now, we made a function (magic box) to add "9" by any number.