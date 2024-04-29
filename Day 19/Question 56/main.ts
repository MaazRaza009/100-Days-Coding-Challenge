//A mixed bag of items
let mixedItems = [1, 2, 3, 4, "coding", "100Days", "Typescript", true, false]
//Pick out just the words or strings
let pickWords = mixedItems.filter(items => typeof items === "string");
//Now showing only strings or words
console.log(pickWords);
