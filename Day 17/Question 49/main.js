function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I am very enjoying when I ".concat(hobby, "."));
    });
}
logHobbies("coding", "playing criket", "writing");
