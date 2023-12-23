/* Implement a simple shopping cart program using an array. Create functions to add items,
remove items, and update quantities using the splice method. Print the cart's contents after each operation. */

interface Items {
  name: string;
  quantity: number;
}
// Add Items

let shoppingcart: Items[] = [];
let add_items = (item: Items) => {
  shoppingcart.push(item);
};

add_items({ name: "Bread", quantity: 2 });
add_items({ name: "Egg", quantity: 12 });
add_items({ name: "Margarine", quantity: 2 });
console.log(shoppingcart);

// Remove an Item

let remove_item = (itemName: string) => {
  let index = shoppingcart.findIndex((item) => item.name === itemName);
  if (index !== -1) {
    shoppingcart.splice(index, 1);
    console.log(`${itemName} removed.`);
  } else {
    console.log(`Item ${itemName} not found.`);
  }
};
remove_item("Margarine");
console.log(shoppingcart);

// Update an item

let update_item = (itemName: string, newQuantity: number) => {
  let index_1 = shoppingcart.find((item) => item.name === itemName);
  if (index_1) {
    index_1.quantity = newQuantity;
    console.log(`Item ${itemName} updated.`);
  } else {
    console.log(`Item ${itemName} not found.`);
  }
};

update_item("Egg", 24);
console.log(shoppingcart);
