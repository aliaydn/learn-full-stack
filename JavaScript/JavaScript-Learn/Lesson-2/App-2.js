//document.write("javascript");//javascript noktalı virgülle ayrılır 
//alert("Anguler JS");

//document.getElementById('result').innerHTML = "JavaScript sabit değer";
//iki tırnak arasında yazılan sabit değer dir.Sbt değerlere "literal" denir.
//tırnak içerisinde yazılan hersey string dir. metindir.

//değişkenler veri tutucudur/depodur. örnek; var, let ,const
//değişkenler, veri değerlerini depolamak için kullanılır.
var veritutucu;
veritutucu = 7;//durada değişken değerini belirledik.
document.getElementById('result').innerHTML = veritutucu;
//burada innerHTML den sonra veritutucu yazmadı çünkü değişken veri tutucular 
//sakladığı değeri yazdırır.


veritutucu = "JavaScript";
document.getElementById('result2').innerHTML = veritutucu;

//eğer veri tutucuya birşey tanımlamazsak "undefined" uyarısı verir.
//yani tanımsız uyarısı.Yani bir değişken tanımladın ama içerisinde 
//hiçbir sey tanımlamadın der.


//"not defined" hatası ise değişken tanımlanmamış anlamındadır.

var x, y, z ;
x = 40;
y = 20;
z = x + y;
document.getElementById('result').innerHTML = z;
//burda üç tane değişken tanımlandı, ve bu depolara değerler verdik.
//ve bu değerler ile işlem yapabilir hale geldik.
 