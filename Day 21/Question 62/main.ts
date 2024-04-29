// Using blueprint (interface) for student information.
interface Student{
    student_Name: string;
    age: number;
    classes: string[]
};
// Fill this blueprint (interface) using student information.
// when using blueprint (interface) make sure student have a name, age and classes list.
let student: Student = {
    student_Name: "Ali",
    age: 18,
    classes: ["English", "Urdu", "Math"]
};
// Console them to check student information.
console.log(student);