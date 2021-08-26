var sellingPrice = 100;
var listPrice = 300;
var discountPercentage = ((listPrice - sellingPrice)/listPrice) * 100;

console.log("Discount Percentage is " + discountPercentage);

displayDiscountPercent = Math.round(discountPercentage);
console.log(displayDiscountPercent);