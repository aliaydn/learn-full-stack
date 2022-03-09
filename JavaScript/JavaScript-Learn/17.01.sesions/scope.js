//***********Birinci durum**********************
// var a = 'Global'
// console.log(a);
// {
//     let a = 'scope'
//     console.log(a);
// }
// console.log(a);

//**********İkinci durum*************
//süs parantez içeisine  neden 'var' yerine 'let' yazdık çünkü 'global' bozmamak için. Yani eğer biz 'scope' let değilde var yazsaydık son çıktımız 'global' yerine 'scope' olacaktı. Süslü parantez içerisine yazmamızın nedeni ise 'hem global' bozmamak hem de bir kere kullanılacak olan veriye döndürdükten sonra memory de yer kaplamasını engellemek için kullanıyoruz . bize bir kere döndürür ve işlem sonrası boşuna yer kaplamaz.

// var a = 'Global'
// console.log(a);
// {
//     let a = 'scope'
//     console.log(a);
//     {
//         let a = 'inner scope'
//         console.log(a);
//         {
//             let a = 'inner two scope';
//             console.log(a);
//             {
//                 let a = 'inner three scope';
//                 console.log(a);
//             }
//             console.log(a);
//         }
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a);

