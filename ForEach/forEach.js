const products = [
   { title: 'Burger', price: 121 },
   { title: 'Pizza', price: 20 },
   { title: 'dulces', price: 5 },
   { title: 'Ropa', price: 80 },
   { title: 'Dinero', price: 500},
];
const app = document.getElementById('app');
const lis = products.map(product => {
    return `<li>${product.title} = ${product.price}</li>`;
})
app.innerHTML = lis.join('');