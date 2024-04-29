//A mixed bag of items
var mixedItems = [1, 2, 3, 4, "coding", "100Days", "Typescript", true, false];
//Pick out just the words or strings
var pickWords = mixedItems.filter(function (items) { return typeof items === "string"; });
//Now showing only strings or words
console.log(pickWords);
