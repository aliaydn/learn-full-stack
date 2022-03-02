//Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz.
//*Müşteri adı
//*Müşteri soyadı
//*Müşteri tc kimlik
//*Müşteri sipariş toplamı
//*Müşteri cinsiyet
//*Müşteri adres bilgisi
//*Müşteri hobileri

let customerName = 'John';
let customerLastName = 'John';
let musteriId = '12345678912';

let total = 205.6;
let gender = 'true'; //erkek true, kadın false

//object
let address = {
    city : 'Ankara',
    district : 'Çankaya',
    body : 'Hanımağa mah. no:45',
}

//array
let hobbies = ['Sinema', 'Kitap', 'Spor'];

//**Aşağıda siparişlerin toplamını hesaplayınız.

let order1 = Number('100');
let order2 = Number('150');

let totalOrder = order1 + order2;
console.log(totalOrder);

//*Aşağıdaki siparişlerin toplamını hesaplayınız.

let order3 = Number('100.2');
let order4 = Number('150.5');

let totalOrder2 = order3 + order4;
console.log(totalOrder2);

//*Aşağıdaki ifadeyi tamsayı olarak hesaplayınız.

let order5 = parseInt('100.2');//ondalıkları yok etmek için "parseInt"
let order6 = parseInt('150.5');

let totalOrder3 = order5 + order6;
console.log(totalOrder3);

//*Aşağida verilen doğum yılına göre yaş hesaplayınız.

//burada yaş bilgisinin değişmesini istemiyorsak "let" yerine "const" kullanmamız gerekiyor.
let yearOfBirth = 1999;

//new Date().getFullYear() ile şuan ki yıl bulunur ve verilen yıldan çıkartılır.
console.log(new Date().getFullYear() - yearOfBirth); //yaş hesabı

//*Aşağıdaki string ifadenin karakter sayısını bulunuz.

let course = 'Modern JavaScript Kursu';
console.log(course.length);