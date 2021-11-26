const products = [
   { title: "Pizza", price: 121, id: "🍕" },
   { title: "Burger", price: 121, id: "🍔" },
   { title: "Hot cakes", price: 121, id: "🥞" }
];
const myProducts = [];
console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const productIndex = products.findIndex(item => item.id === '🍔')
if(productIndex !== -1) {
   myProducts.push(products[productIndex]);
   products.splice(productIndex, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// uptade

const productsVr2 = [
   { title: "Pizza", price: 121, id: "🍕" },
   { title: "Burger", price: 121, id: "🍔" },
   { title: "Hot cakes", price: 121, id: "🥞" }
];

const udate1 = {
   id : "🥞",
   changes: {
      price: 200,
      descripcion: "Delicioso"
   }
}
const productIndexVr2 = productsVr2.findIndex(item => item.id === udate1.id)
productsVr2[productIndexVr2] = {
   ...productsVr2[productIndexVr2],
   ...udate1.changes
};
console.log(productsVr2)