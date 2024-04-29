let laptops_PricesSet1 = [1000, 2000, 3000];
let laptops_PricesSet2 = [1500, 2500, 3500];
let combined_LaptopsPrices = [...laptops_PricesSet1,...laptops_PricesSet2].sort((a, b) => a - b);
console.log(combined_LaptopsPrices);