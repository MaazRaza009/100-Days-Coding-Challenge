var userProfile = (function () {
    var name = "Ali";
    var age = 23;
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
userProfile.displayInfo();
