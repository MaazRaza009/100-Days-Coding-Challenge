//list of grades
let grades = [60, 75, 80, 65, 95]
//Form average grades
let averageGrades = grades.reduce((total,grade) => total + grade, 0)
/grades.length
// Now console this
console.log(averageGrades);
