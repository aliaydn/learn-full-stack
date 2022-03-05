var num = 15.123456789;

//toplamda 3 basamaklı sayı kullan

console.log(num.toPrecision(4));

//ondalık kısmı 3 basamakta sınırla

console.log(num.toFixed(4));

//en yakın sayıya yuvarla

console.log(Math.round(num));

//aşağı yuvarla

console.log(Math.floor(num));

//yukarı yuvarla

console.log(Math.ceil(num));

//1,2,10,56,20 sayılarından en küçüğü ve en büyüğünü bul

console.log(Math.min(1, 2, 10, 56, 20));
console.log(Math.max(1, 2, 10, 56, 20));

//sayı aralığını kullanıcının belirleyeceği rastgele bi sayı üretin.

var min = 50;
var max = 100;

console.log(Math.floor(min + Math.random() * (max - min)));

//Bir personelin yaptığı mesai göre aldığı maaşı hesaplayalım.
//  ** Brüt maaşı : 3700 TL
//  ** Brüt mesai : 10.3 TL
// Ağustos ayı mesai toplamı 42 saat ise toplam brüt maaşı nedir?
// Brüt maaş üzerinden toplam kesinti oranı %25 ise alınacak toplam net maaşı nedir?

var brutMaas = 3700;
var mesaiUcreti = 10.3;
var mesaiSuresi = 42;
var toplamBrutMaas = brutMaas + (mesaiUcreti * mesaiSuresi);

var toplamNetMaas = toplamBrutMaas - toplamBrutMaas * 0.25;

console.log(toplamBrutMaas.toFixed(2), toplamNetMaas.toFixed(2));


