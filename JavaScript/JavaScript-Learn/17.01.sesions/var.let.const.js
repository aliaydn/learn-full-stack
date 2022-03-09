// var c = 3;
// console.log(c);
// var c = 5;
// console.log(c);// var kullamında uzun kod yazımlarında var değişkeni ile atanan değer sonraki satırlarda yeni değer ataması ile değişebiliyor bu da çok istenen bir durum değildir. bunda dolayı var yerine 'let' kullanımına geçilde 


//bu kod bloğunda hata verecektir. çünkü 'let' ile tanımlanan c değeri tekrar dan tanımlama yapılamayacağını bize bildirir. ve aynı değişkene farklı değer ataması yapamayız.aynı scope içerisinde aynı değişkene ayrı değer ataması yapmamızı engellemiş oluyoruz. Ama ikinci let kaldırılırsa hata vermez.
// let c = 3;
// console.log(c);
// let c = 5;
// console.log(c);

// ***'var' ile tanımlanan değişkenler, fonksiyonlar window içerinde kullanmadan yer işgal etmeye başlıyor. ama 'let' ile tanımlama yaparsak kullanıma geçmeden değişkenler yer işgal etmez. kullanmaya başaladıktan sonra memory de alan kaplar.

// ** *** var *** ****

// var a = 5;
// var aa = 3;// burada colsole kısmına window yazdığımız zaman var ile tanımlama yaptıklarımızın yer işgaline başladıklarını göreceksiniz.

// ** ** *** let *** ***** ****

// let a = 5;
// let aa = 3;// burada colsole kısmına window yazdığımız zaman let ile tanımlama yaptıklarımızın yer işgal etmediklerini göreceksin.

// *** ** *** const *** *** *** **
//'const' biz bir değerin değiştirilmesini istemiyorsak kullanıyoruz. 
// const h = 'constant variable';
// console.log(h);
// h = '2';


// burada undefined döner çünkü tanımlamadan önce çağırdığımız için
// console.log(d);
// var d = 6;

// console.log(e);
// let e =5;

//'let ve const' tanımlandan önce çağrılamıyor.

var teacher = 'John';
var d = ` Merhaba ${teacher}`;
console.log(d);
console.log(`${teacher}`);

var x = 3 > 4;
var y = 3 == '3';//true
var y = 3 === '3';//false

console.log(x);
console.log(y);