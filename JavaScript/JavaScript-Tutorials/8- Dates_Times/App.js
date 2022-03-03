let d = new Date();
let birthday = new Date(1990,1,5);

// Set Methods
d.setFullYear(2018);
d.setMonth(5);
d.setDate(21);
d.setHours(13);
d.setMinutes(25);
d.setSeconds(45);


// Get Methods
console.log(d.getDate()); // method çağırır iken sonuna parantez açıp kapatıyoruz.
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());



console.log(d.getFullYear() - birthday.getFullYear());
console.log(d.getMonth() - birthday.getMonth());
console.log(d.getDate() - birthday.getDate());


console.log(d);
console.log(typeof d);