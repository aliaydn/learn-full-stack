//** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.
//** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.
// 1/1/1990 tarihinden bir gün öncesini gösteriniz.
// iki tarih arasındaki geçen zamanı bulunuz.
// her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2022 yılında ne zaman kutlanacaktır?
// yaş hesaplama nasıl yapılır?

let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDay());

console.log(d);

d.setFullYear(1989);
d.setMonth(12);
d.setDate(31);

console.log(new Date() - d.setFullYear());

