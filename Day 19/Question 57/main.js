//list of grades
var grades = [60, 75, 80, 65, 95];
//Form average grades
var averageGrades = grades.reduce(function (total, grade) { return total + grade; }, 0)
    / grades.length;
// Now console this
console.log(averageGrades);
