var laptop = {
    make: "hp",
    model: "EliteBook 755 G4",
    year: "2023",
    describe: function () {
        console.log("This laptop is: ".concat(this.make, ", ").concat(this.model, ", year is: ").concat(this.year, "."));
    }
};
laptop.describe();
