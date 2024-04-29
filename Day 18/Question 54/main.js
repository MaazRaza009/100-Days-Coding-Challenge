function flexibleObjectKey(key, value) {
    var dynamicObject = {};
    dynamicObject[key] = value;
    return dynamicObject;
}
var userLike = flexibleObjectKey("color", "red");
console.log(userLike);
