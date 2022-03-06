// "Bmw, mercedes, opel, mazda" elemanlarına sahip bir sizi oluştur.

let car = ['bmw', 'mercedes', 'opel', 'mazda'] //birinci yöntem
//let car2 = new Array('bmw', 'mercedes', 'opel', 'mazda') //ikinci yöntem

console.log(car);
//console.log(car2);

// dizi kaç elemanlıdır.
console.log(car.length);

// dizinin ilk ve son elemanı nedir
console.log(car[0]);
console.log(car[3]);
console.log(car[car.length - 1]); //dizinin length 4 verir -1 yaparsak son elemanı verir.

//renault değerini dizinin sonuna ekleyin
//car[4] = "renault"; //birinci yöntem
car[car.length] = "renault"; // bu şekilde her seferinde elem dizisinin sonuna ekleme yapar
//car[car.length] = "fiat";
car.push('toyota'); //bu şekilde de olabilir

//seat değerini dizinin başına ekleyin
car.unshift('seat'); // en başa ekleme yapmış olduk

// seat değerini siliniz.
car.shift('seat'); // baştan silme yapar

//toyota değerini siliniz
car.pop('toyota'); // sondan silme yapar

//dizi elemanalrını ters çevirin.
car.reverse(); //dizi elemanlarını ters çevirir

//dizi elemanlarını alfabetik olarak sıralayınız.
car.sort();

//[1,2,5,80,15] dizisini sıralayın
let numbers = [1,2,5,80,15]; //alfabetik sıraya göre sıraladı

function compare(a, b) {
    if(a>b) return 1;
    if(a == b) return 0;
    if (a < b) return -1;
}
console.log(numbers.sort(compare)); // sayısal olarak sıraladı

//opel değeri dizinin bir elemanımıdır?
console.log(car);
console.log(car.indexOf('opel')); // opel dizinin bir elemanın sırasını bulduk
console.log(car.includes('opel')); // opel dizinin bir elemanımı evet veya hayır alıcaz.Dizi deki yeri önemli değil.

//let str = 'chevrolet, dacia';
//ifadesini diziye çeviriniz

let str = 'chevrolet, dacia';
let arr2 = str.split(',');
console.log(arr2); // iki elemanlı dizi oluşturduk

// oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin.
let arr3 = car.concat(arr2);
console.log(arr3); // dizleri birleştirdik

//oluşturulan diziden son 2 elemanı siliniz.
//console.log(arr3.pop());
//console.log(arr3.pop());

//console.log(arr3.splice(6,2));
console.log(arr3.slice(5,7));

//Aşağıda verilen elemanları bir dizi içerinde saklayınız.

    //studentA : Yiğit Bilgi 2010
    //studentB : Sena Turan 1999
    //studentC : Ahmet Turan 1998

    let studentA = ['yiğit', 'bilgi', 2010];
    let studentB = ['sena', 'turan', 1999];
    let studentC = ['ahmet', 'turan', 1998];

    let student = [studentA, studentB, studentC];
    console.log(student[0][0]);
    console.log(student[0][1]);
    console.log(student[0][2]);

    console.log(student[1][0]);
    console.log(student[1][1]);
    console.log(student[1][2]);

    console.log(student[2][0]);
    console.log(student[2][1]);
    console.log(student[2][2]);
    console.log(student);