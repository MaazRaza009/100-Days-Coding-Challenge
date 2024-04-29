//Create a function for average score and write a numbers at last
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    //Add all the scores and divide them to find the average
    var totalScore = scores.reduce(function (total, score) { return total + score; }, 0);
    return totalScore / scores.length;
}
//console them and in the console write the numbers in there
console.log(averageScore(10, 80, 76, 5));
