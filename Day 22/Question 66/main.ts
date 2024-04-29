// This function check if both inputs are true
function checkBothTrue(value1: boolean, value2:boolean): boolean{
// If we can easily check the boolean value we can use "&&" opertors
// It only says true if value1 and value2 both will true
    return value1 && value2
};
console.log(checkBothTrue(true , false)); // It shows "false"
// In "&&" operators if all values is true but one is false then output will be false