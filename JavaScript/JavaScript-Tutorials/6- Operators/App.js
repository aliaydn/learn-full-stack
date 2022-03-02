//Operators

let val;
const a = 10;
const b = 5;
const c = 5;
let d = 3;
//1- Aritmetik Operators
val = a + b;
val = a - b;
val = a * b;
val = a / b;
val = a % b;
val = d++;
val = ++d;
val = --d;
val = d--;

//2- Atama Operators
val = a;
val += a; // val = val + a;
val -= a;
val *= a;
val /= a;
val %= a;

//3- Karşılaştırma Operators
val = a == b;
val = b == c;
val = a === c; // hem değer kontrolü hem de tip kontrolü yapılıyor.
val = a != b;
val = a !== b;
val = a > b;
val = a < b;
val = a >= b;
val = a <= b;

//4- Mantıksal Operators

    //&& (And)
        // true && true => true
        // true && false => false
        // false && false => false

    val = (a > b) && (a > c);

    // || (Or)
        // true || true => true
        // true || false => true
        // false || false => false

    val = (a > b) || (a < c)

    // ! (Not)
        // !true => false
        // !false => true

    val = !(a > b)

console.log(val);
console.log(typeof val);