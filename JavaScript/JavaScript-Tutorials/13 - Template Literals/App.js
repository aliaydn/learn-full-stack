// Template Literals

const fullName = "John Dehan";
const city = "New York";
const yearOfBirth = 2005;

let val;

val =
  "my name is " +
  fullName +
  " I'm " +
  (2018 - yearOfBirth) +
  " years old " +
  " and I live in " +
  city;

  // bu kullanıma 'ternary operator' denir

val = `my name is ${fullName} I'm ${(2018 - yearOfBirth >= 18)? ' over 18' : 'under 18'}
and I live in ${city}`;// soru işaretinden sonra gelen ilk işlem gerçekleşir.

console.log(val);
