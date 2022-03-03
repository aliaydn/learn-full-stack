// 1- Can ve Ada'nın boy ve kg bilgilerini alın
// 2- Alınan bilgilere göre kilo indekslerini hesaplayınız.
//** Formül: Kişinin kilosu/boy uzunluğunun karesi
//3- Hesaplanan indeks bilgisine göre karşılaştırma yapınız.
//4- Aşağıdaki tabloya göre can ve ada hangi gruba giriyor.

// 0 - 18,4 : zayıf
// 18,5 - 24,9 : normal
// 25 - 29,9 : fazla kilolu
// 30 - 34,9 : şişman (obez)

let IndexCan;
let IndexAda;

const kiloCan = 85;
const kiloAda = 110;

const heigtCan = 1.75;
const heigtAda = 1.80;

IndexAda = (kiloAda) / (heigtAda * heigtAda);
IndexCan = (kiloCan) / (heigtCan * heigtCan);

console.log(IndexAda.toFixed(2), IndexCan.toFixed(3));

let adaHigherIndex = IndexAda > IndexCan;
console.log("Ada'nın kilo indeksi can'ın kilo indeksinden daha büyük : " + adaHigherIndex);

let AdaPosition = (IndexAda >= 0) && (IndexAda <= 18.4);
let AdaNormal = (IndexAda >= 18.5) && (IndexAda <= 24.9);
let AdaKilolu = (IndexAda >= 25) && (IndexAda <= 29.9);
let AdaSisman = (IndexAda >= 30) && (IndexAda <= 34.9);

console.log("Ada zayıf :" + AdaPosition);
console.log("Ada'nın kilosu normal :" +AdaNormal);
console.log("Ada kilolu mu? :" +AdaKilolu);
console.log("Ada şişman mı? :" +AdaSisman);
