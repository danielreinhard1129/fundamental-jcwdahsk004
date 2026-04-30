console.log("Hello World");

// ini adalah comment
// ini adalah comment 2

/* 
    ini 
    adalah 
    comment
*/

// ================ VARIABLE ================
// storage / penampungan data
// var, let, const

var person = "Budi";
console.log(person);

let person2 = "Siti";
person2 = "Jack";
console.log(person2);

const person3 = "Joko";
// person3 = "Udin"; // ini gak bisa
console.log(person3);

// ================ VARIABLE NAMING ================
/* 
    - must contain only letters, digit, or symbol "$" and "_"
    - the first character must not digit
    - case sensitive
*/

const companyName = "Purwadhika"; // camel case
const CompanyName = "Purwadhika"; // pascal case
const company_name = "Purwadhika"; // snake case

// ================ DATA TYPES ================
// primitive data types : string, number, boolean, null dan undefined
// non primitive data types : object dan array

// string -> "" '' ``
console.log("Hello");
console.log('Hello');
console.log(`Hello`);

// number -> 1 2 3 4 10 100 1000
console.log(1);
console.log(10);
console.log(40);

// boolean -> true or false
console.log(true);
console.log(false);

// null -> menandakan sebuah value itu masih kosong dan belum terisi
let orang = null;

// undefined -> js tidak tau isinya
let orang2 = undefined;

console.log(typeof companyName);
console.log(typeof 1000);
console.log(typeof true);

// windows : ctrl + k + q
// mac : cmd + k + q


