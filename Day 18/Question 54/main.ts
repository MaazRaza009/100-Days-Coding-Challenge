function flexibleObjectKey(key: string, value: string){
let dynamicObject = {}
dynamicObject[key] = value
return dynamicObject;
}
let userLike = flexibleObjectKey("color", "red");

console.log(userLike);
