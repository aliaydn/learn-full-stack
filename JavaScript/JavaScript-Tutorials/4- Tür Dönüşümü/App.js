// let num1 = Number('5');
// let num2 = Number('10');

// let total = num1 + num2;
// console.log(total);
// console.log(typeof total);

// console.log(typeof num1);

let val;
// number to string
val = String(10);

//bool to string
val = String(true);

//date to string
val = new Date();
val = String(new Date().getFullYear());//"getFullYear" sadece yıl bilgisini verir
//"getMinutes()" sadece dakika bilgisini, "getDay" gün bilgisini verir.

//array to string
val = String([1, 2, 3, 4])

//toString()
val = (10).toString();
val = (false).toString(); //bu şekilde direk string ifadeye çevirebiliriz.

//String to Number
val = Number('10');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('a');
val = Number([1,2,3,4]);

//parseInt
//parseFloat

val = parseInt('10');
val = parseInt('10.5');
val = parseFloat('10.5');


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));//"toFixed()" number ifadeyi yazdırır ve parantez içine yazılan rakam kadar nokktadan 
//sonra gelecek rakam sayısını belirler. Örenek: toFixed(2) yani .00 gibi.


//"length" ile karakter uzunluğunu bulduk.Burda işlemi saddece string için yapar.