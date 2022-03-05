var sentence = " Template Literals or template strings is the ability have multi-line strings without any funny business. ";
var url = "http:// abcde.com/Abc JS kursu ileri seviye";

// cümle kaç karakterlidir?

console.log(sentence.length);

// kaç kelimeden oluşuyor?
console.log(sentence.trim().split(' ').length);

// tüm cümleyi küçük harfe çevirin
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

// cümlenin başındaki ve sonundaki boşlukları siliniz.
console.log(sentence.trim()); 

// '-' karakterini silin.
console.log(sentence.replace('-', ''));// replace fonksiyonu için önce değiştirilecek karakter sonra yerine gelecek olan karakter yazılır.

//url içerisindeki str kısmını çıkartınız.
var str = 'http://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol' u kullanmaktadır? (http, https)
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url, ',com' ifadesini içeriyor mu?
console.log(url.indexOf('.com')); // burada değer '-1' çıkması demek değer bulunamadıdır.
console.log(url.includes('.com')); //burada ise bize sonucu true veya false olarak verir.

//url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log(url.toLowerCase()
               .replace(/ /g, '-')  //burada bütün boşluk karakterlerini çizgi ile değiştirir.
               .replace(/ı/g, 'i')  //burada bütün 'ı' karakterlerini 'i' ile değiştirir.
               .replace(/a/g, 'e')  //burada bütün 'a' karakterlerini 'e' ile değiştirir.
               .replace(/k/g, 'l')  //burada bütün 'k' karakterlerini 'l' ile değiştirir.
);
