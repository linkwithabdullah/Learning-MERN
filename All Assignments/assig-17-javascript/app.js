let users = [];

for (let i = 1; i <= 100; i++) {
  users.push({
    age: i, // age from 1 to 100
    fullName: "User " + i,
    country: "Pakistan",
  });
}

let adults = [];

for (let j = 0; j < users.length; j++) {
  if (users[j].age >= 18) {
    adults.push(users[j]);
  }
}

console.log("All Users:", users);
console.log("Adult Users (Age 18+):", adults);
console.log("Total Adults:", adults.length);
