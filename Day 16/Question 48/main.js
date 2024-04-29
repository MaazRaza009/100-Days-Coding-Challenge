var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var laptops_PricesSet1 = [1000, 2000, 3000];
var laptops_PricesSet2 = [1500, 2500, 3500];
var combined_LaptopsPrices = __spreadArray(__spreadArray([], laptops_PricesSet1, true), laptops_PricesSet2, true).sort(function (a, b) { return a - b; });
console.log(combined_LaptopsPrices);
