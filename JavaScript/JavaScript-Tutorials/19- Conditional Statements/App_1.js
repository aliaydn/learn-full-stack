var result = prompt("who's there?");//prompt ile girilen bilgileri kontrol etme şansımız var

if (result == 'cancel') {
    console.log('cancelled');
}else if (result == 'Admin') {
    console.log('welcome Admin');

    var password = prompt('enter your password: ');
    if (password == 'cancel') {
        console.log('cancelled');        
    }else if (password == '1234') {
    console.log('welcome Admin');        
    }else{
        console.log('wrong password');
    }

}else{
    console.log('I dont know you');
}