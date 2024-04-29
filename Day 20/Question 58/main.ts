//Create a function for average score and write a numbers at last
function averageScore(...scores: number[]):number {
    //Add all the scores and divide them to find the average
   let totalScore = scores.reduce((total, score) => total + score, 0)
    return totalScore / scores.length
}
//console them and in the console write the numbers in there
console.log(averageScore(10, 80, 76, 5));
