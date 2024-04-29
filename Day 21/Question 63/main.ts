// Creating custom type (type alias) of shapes: circle and rectangle
type Shape = {
    shapes: "circle"  |  "rectangle"
    radius? : number; // for circle
    height? : number; // for rectangle
    width? : number;// for rectangle
};
// Describing circle
let circle: Shape = {
    shapes: "circle",
    radius: 4
}
// Describing rectangle
let rectangle: Shape = {
    shapes: "rectangle",
    height: 15,
    width: 25
}
// let showing what we described using console
console.log(circle); // for circle
console.log(rectangle); // for rectangle

