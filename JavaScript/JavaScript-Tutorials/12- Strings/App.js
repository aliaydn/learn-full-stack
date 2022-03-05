// Strings

const firstName = 'John';
const lastName = 'Dohen';
let hobbies = 'sinema, spor, kitap, yazılım';
const age = 35;
let val;

// string concatenation

val = firstName + ' ' + lastName;
val = 'John'
val += ' Dohen'

val = 'Benim adım ' + firstName + ' ' + lastName + ' ve yaşım ' +
age + ' izmit\'te yaşıyorum.'; // normalde burada çift tırnak kullanmamız gerekiyor ama 
//ters "\" işareti ile sorunu aşarız.


// string concat
val = firstName.concat(' ', lastName)

// string length
//val = val.length;

//string uppercase - lowercase

//val = val.toUpperCase();
//val = val.toLowerCase();

//string replace

val = '  ' + val.replace('John', 'Tom') + '     ';

//trim
val = val.trim();

// substring
//val = val.substring(0, 7)

//slice
//val = val.slice(6);
//val = val.indexOf('o');
//val = val[1];

val = hobbies.split(',')

console.log(val);
console.log(typeof val);