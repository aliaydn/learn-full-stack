// "=" burda eşittir atama operatörüdür.
//"==" bu ise iki ifadenin birbirine eşit olduğu anlamına geliyor.
var age = 7;
age = age + 11;
document.getElementById('result').innerHTML = age;

//değişkeni bildirdiğinde de bir değer atayabilirsin.
var firstName, lastName, x, y, z, age = 7, sum, carName = "ford";
age = age + 11;
firstName = "Abx";
lastName = "Edr";
document.getElementById('result').innerHTML = carName;

//İyi bir JS programlaması bütün değişkenleri en başta bildirmen gerekir.
//bir bildirim bir den çok satıra yayılabilir.
var age, 
    x,
    y, 
    z, 
    lastName;
age = 18;
lastName = "Abeb"
x = 7 + 6 + "4"; // ilk ifadeler integer olduğu için toplama işlemini yapar, son ifade
// string olduğu için toplanan sayısın araksına birleştirir.(134)sonucunu verir.
x = "7" + 6 + 4; // burda ise ilk ifade string olduğu için bütün ifadeleri yan yana 
//yazarak (764) sonucunu yazdırır.
document.getElementById('result').innerHTML = x


//değişkenler genellikle bie değer olmadan bildirilir.

//function lar çağrılmadığı sürece çalışmazlar. Bir yöntem fonksiyonun başında 
//fonksiyon ismi yazıldığı zaman bize ekranda çıktıyı verecektir.
print();
function print() {
    var firstName, lastName, x, y, z, age;
    x = 7 + 6 + "4";
    firstName = "Abdkjnkj";
    y = "\"Node js\" ile javascript sunucuya taşındı";
// burada tırnakları hata vermeden yazdırabilmek için ilk (\) tırnaktan önce
//ikinci (\) ise tırnak işaretinden önce kullanılır.
//Ama mantıklı yöntem ise dış tırnakları (') tek yapıp iç tırnaklar ise (") olarak 
//yapılabilir.
    y = '"Node js" ile javascript sunucuya taşındı';

    document.getElementById('result').innerHTML = y;
}
