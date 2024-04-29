var vehicleCategories;
(function (vehicleCategories) {
    vehicleCategories[vehicleCategories["Car"] = 0] = "Car";
    vehicleCategories[vehicleCategories["Truck"] = 1] = "Truck";
    vehicleCategories[vehicleCategories["Motorcycle"] = 2] = "Motorcycle";
})(vehicleCategories || (vehicleCategories = {}));
;
console.log(vehicleCategories.Motorcycle);
