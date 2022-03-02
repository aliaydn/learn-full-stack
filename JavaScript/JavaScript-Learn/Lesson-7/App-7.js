var x, y, z, sum, sub, multi, Div, mod, txt1, txt2, txtresult;
x = 70;
y = 4;
sum = x + y;
sub = x - y;
Div = x / y;
mod = x % y;
multi = x * y;
z = x++;
x += 5 // x = x + 5 aynı işlem
/* txt1 = "JQUERY"
txt2 = "JS' te en çok kullanılan kütüphanedir."
txtresult = txt1 + " " + txt2; */
txt1 = "JQUERY";
txt1 += " JS' te en çok kullanılan kütüphanedir.";
txtresult = txt1
//"+"operatörü bu işlemde x in sağında olursa z:70 x:71 olur.
//"+"operatörü bu işlemde x in solunda olursa z:71 x:71 olur.
document.getElementById("result").innerHTML =
  "z değeri: " + z + "<br> x değeri:" + x;
// y++;
// document.getElementById("result").innerHTML = y;

document.getElementById('result').innerHTML = txt1 + " " + txt2;
document.getElementById('result').innerHTML = txtresult;


//şart cümleleri belirlemek için "if" kullanılır.
x = 5;
y = 4;
if (x == y) { //sayısal eşitleme yapar.
    document.getElementById('result').innerHTML = "koşul sağlandı";
}else{
    document.getElementById('result').innerHTML = "koşul sağlanamadı";
}

x = "5";
y = 5;
if (x === y) { //üç eşit hem sayısal hem de tür karşılaştırması yapar.
    document.getElementById('result').innerHTML = "koşul sağlandı";
}else{
    document.getElementById('result').innerHTML = "koşul sağlanamadı";
}

//"!=" eşit değildir anlamına gelir.
x = 5;
y = 4;
if (x != y) {
    document.getElementById('result').innerHTML = "koşul sağlandı";
}else{
    document.getElementById('result').innerHTML = "koşul sağlanamadı";
}

//">" büyüktür işareti, "<" küçüktür işareti.
x = 5;
y = 8;
if (x > y) {
    document.getElementById('result').innerHTML = "koşul sağlandı";
}else{
    document.getElementById('result').innerHTML = "koşul sağlanamadı";
}
//">=" büyük eşittir
//"<=" küçük eşittir.