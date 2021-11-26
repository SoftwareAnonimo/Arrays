const users = [
   { userId: 1, username:"tom", attributes: ["Nice", "Cute"] },
   { userId: 2, username: "Mike", attributes: ["Lovely"] },
   { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

const rta = users.map(user => user.attributes).flat();
const rta2 = users.flatMap(user => user.attributes);
console.log('map-flat', rta);
console.log('rta2', rta2);