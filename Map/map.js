// MAP

// const letters = ['Nickelodeon', 'Fox', 'Marvel', 'Televisa'];

// const newArray = letters.map(item => item + ' Plus');
// const newArray = []
// for (let index = 0; index < letters.length; index++) {
//    const element = letters[index];
//    newArray.push(element + '+');
// }
// console.log('Original', letters);
// console.log('new', newArray);

// MAP RELOADED

const orders = [
   {
      customerName: 'Ricolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
];

const rta = orders.map(item => item.total)
console.log('rta', rta);

// const rta2 = orders.map(item => {
//    item.tax = .19;
//    return item;
// })
// console.log('rta2', rta2);

const rta3 = orders.map(item => {
   return {
      ...item,
      tax: 1.19
   };
});

console.log('rta3', rta3);
console.log('original', orders);