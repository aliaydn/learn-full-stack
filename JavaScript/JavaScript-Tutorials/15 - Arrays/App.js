// Arrays

let names = ['John', 'Tom', 'Jerrey', 'Anna'];

let years = [2017, 1999, 2012,1990,1989, 2010]
let mix = ['Tom', 'Anna', 1999, null]

// // get array item
// console.log(names[0]);
// console.log(names[3]);

// // set array item

// names[5] = 'Cass';
// names[names.length] = 'same';


// // add item
// years.push(1987);
// years.unshift(1986);

// //remove item
// years.pop();
// years.shift();

// // indexof
// let index = names.indexOf('Anna');
// console.log(' index : ' + index);

// //reverse
// names.reverse();

// // sort
// years.sort();

// concat
// let val = years.concat(names);
// console.log(names);

//splice
// console.log(names);

// names.splice(0, 1);


function over18(year) {
    let age = 2018 - year;
    return age >= 18;
}

// find
//let val = years.find(over18);

//filter
let val = years.filter(over18);
console.log(val);


console.log(names);
console.log(names.length);
console.log(typeof names);

// console.log(years);
// console.log(mix);