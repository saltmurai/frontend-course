const shoppingList = [
  { name: "Milk", price: 7.99 },
  { name: "Bread", price: 3.99 },
  { name: "Ice Cream", price: 6.99 },
  { name: "Chocolate", price: 4.99 },
  { name: "Candy", price: 1.99 },
];

// Using the forEach method, calculate the total price of the shopping list
// and store it in a variable called totalPrice

let totalPrice = 0;

shoppingList.forEach(function (item) {
  totalPrice += item.price;
});

console.log(totalPrice);
// Then calculate the average price of the shopping list and store it
// in a variable called averagePrice
const averagePrice = totalPrice / shoppingList.length;
console.log(`Average: ${averagePrice}`);

// VAT 10%
const actualPrice = totalPrice + totalPrice * 0.1;
console.log(actualPrice);
// Dung VAT 10% update price cua array cu

const actualShoppingList = shoppingList.map(function (item) {
  const newPrice = item.price + item.price * 0.1;
  return {
    name: item.name,
    price: newPrice,
  };
});

console.log(actualShoppingList);
