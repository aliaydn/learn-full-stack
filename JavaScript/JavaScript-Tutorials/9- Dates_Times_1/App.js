//** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

let d = new Date();
console.log(d);

console.log(d.getMonth() + 1);
console.log(d.getDate());
console.log(d.getFullYear());

//** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

let dA = new Date("8/24/2010 14:50:10");
let dB = new Date(2010, 7, 24, 14, 50, 10);
console.log(dA);
console.log(dB);

// 1/1/1990 tarihinden bir gün öncesini gösteriniz.

let dC = new Date("1/1/1990");
let dayOfMonth = dC.getDate();
dC.setDate(dayOfMonth - 1);

console.log(dC);

// iki tarih arasındaki geçen zamanı bulunuz.

let start = new Date("1/1/1990");
let end = new Date("1/1/1991");

let milisecond = end - start;
let saniye = milisecond / 1000;
let dakika = saniye / 60;
let saat = dakika / 60;
let gun = saat / 24;

console.log("milisecond :" + milisecond);
console.log("saniye :" + saniye);
console.log("dakika :" + dakika);
console.log("saat :" + saat);
console.log("gun :" + gun);

// her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır?

let annelerGunu = new Date();
annelerGunu.setHours(0,0,0,0); //burada saat, dakika ve saniye, milisaniyeye kadar sıfırlandı.
annelerGunu.setFullYear(2019);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);


while(annelerGunu.getDay() != 0){
    annelerGunu.setDate(annelerGunu.getDate() +1)
}
annelerGunu.setDate(annelerGunu.getDate()+7);
console.log(annelerGunu);

// yaş hesaplama nasıl yapılır?

let birthday = new Date("8/1/1985");
let ageDifMs = Date.now() - birthday.getTime();
let ageDate = new Date(ageDifMs);

console.log(ageDate.getFullYear() - 1970);
// console.log(birthday.getTime());
// console.log(Date.now());
