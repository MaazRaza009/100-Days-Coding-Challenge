let laptop = {
    make: "hp",
    model: "EliteBook 755 G4",
    year: "2023",
    describe: function(){
       console.log(`This laptop is: ${this.make}, ${this.model}, year is: ${this.year}.`) 
    }
};
laptop.describe();
