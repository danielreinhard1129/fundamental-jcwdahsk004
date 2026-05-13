// =============== ARRAY ===============

const arr = []; // cara 1
const arr2 = new Array(); // cara 2

const arrayOfString: string[] = ["A", "B", "C", "D"];
console.log(arrayOfString[1]);

const arrayOfNumber: number[] = [4, 1, 2, 3, 5];
console.log(arrayOfNumber[3]);

interface Student {
  name: string;
  age: number;
  hobby?: string;
}

const siswa: Student = {
  name: "budi",
  age: 15,
  hobby: "ngoding",
};

console.log(siswa.name); // cara 1
console.log(siswa["age"]); // cara 2

// array of object
const students = [
  { name: "joko", age: 10 }, // 0
  { name: "budi", age: 10 }, // 1
  { name: "siti", age: 10 }, // 2
  { name: "udin", age: 10 }, // 3
];

console.log(students[2].name);

// =============== FOR OF ===============

const fruits: string[] = ["apple", "banana", "orange", "mango"];

console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// =============== FUNCTION ===============

// function declaration
/* 
    function namaFunc() {
        logic
    };
*/

function sayHello() {
  console.log("Hello");
}

sayHello();

// function expression
/* 
const namaFunc = function () {
    logic
    };
    */

const sayHello2 = function () {
  console.log("Hello");
};

sayHello2();

// =============== FUNCTION SCOPE ===============

function greeting() {
  const hello: string = "Hello";

  console.log(hello);

  return hello;
}

console.log(greeting());

// =============== PARAMETER & ARGUMENT ===============
// parameter -> variable yang mewakili value dari argument yang di masukkan
// argument -> value yang dimasukkan saat pemanggilan function

function greeting2(name: string, company?: string) {
  const welcome: string = "Welcome, ";

  if (company) {
    return welcome + name + " from " + company;
  } else {
    return welcome + name;
  }
}

console.log(greeting2("Joko", "Grab"));

console.log(greeting2("Budi", "Tokped"));

console.log(greeting2("Jack"));

// =============== DEFAULT PARAMETER ===============
function multiply(a: number, b: number = 2) {
  console.log(a);
  console.log(b);

  return a * b;
}

console.log(multiply(3, 10));

// =============== REST PARAMETER ===============
// mewakili sisa argument ke dalam 1 parameter

function myFunc(a: number, b: number, ...c: number[]) {
  console.log(a);
  console.log(b);
  console.log(c);
}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// =============== NESTED FUNCTION ===============
// fungsi yang berada di dalam fungsi
// inner function -> bisa mengakses parameter dari outer function
// outer function -> tidak bisa mengakses parameter dari inner function

// outer function
function getMessage(firstname: string) {
  // inner function
  function sayHello() {
    return "Hello " + firstname + ", ";
  }

  // inner function
  function welcome() {
    return "Welcome to purwadhika";
  }

  return sayHello() + welcome();
}

console.log(getMessage("Jack"));

// =============== RECURSIVE ===============
// fungsi yang memanggil dirinya sendiri

function countdown(angka: number) {
  console.log(angka);

  let nextNumber = angka - 1;

  if (nextNumber > 0) {
    countdown(nextNumber);
  }
}

countdown(10);

// =============== ARROW FUNCTION ===============
// shortcut untuk menuliskan function expression
/* 
    const nameFunc = () => {}
*/

// function expression
const square = function (angka: number) {
  return angka * angka;
};

// arrow func
const square2 = (angka: number) => {
  return angka * angka;
};

// kalo cmn 1 line bisa di singkat
const square3 = (angka: number) => angka * angka;

// =============== ARRAY BUILT IN METHOD ===============
// JOIN -> menggabungkan value yang ada dalam array ke bentuk string
const words: string[] = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const words2: string[] = ["hello", "world", "test"];
console.log(words2);
words2.pop();
console.log(words2);

// SHIFT -> menghilangkan value paling depan dalam array
const words3: string[] = ["hello", "world", "test"];
console.log(words3);
words3.shift();
console.log(words3);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words4: string[] = ["hello", "world", "test"];
console.log(words4);
words4.unshift("budi");
console.log(words4);

// PUSH -> menambahkan value ke urutan paling belakang array
const words5: string[] = ["hello", "world", "test"];
console.log(words5);
words5.push("siti");
console.log(words5);

// SPLICE -> menghapus, mengganti atau menambahkan value pada array
// syntax -> splice(startIndex, brpYgMauDiDelete, item)

const months: string[] = ["jan", "mar", "apr", "jun"];

// menambahkan data
months.splice(1, 0, "feb");
console.log(months);

// menghapus data
months.splice(4, 1);
console.log(months);

// mengganti data
months.splice(3, 1, "may");
console.log(months);

// SORT -> mengurutkan array berupa string / number
const fruits2: string[] = ["orange", "banana", "mango", "apple"];
fruits2.sort();
console.log(fruits2);

const numbers: number[] = [4, 2, 6, 3, 10, 8, 9];
// numbers.sort((a, b) => a - b); // asc
numbers.sort((a, b) => b - a); // desc
console.log(numbers);

// INCLUDES -> mengecek value pada array ada atau tidak. hasilnya boolean
const fruits3: string[] = ["orange", "banana", "mango", "apple"];
console.log(fruits3.includes("banana"));

// MAP -> melakukan looping pada array dan akan mereturn array baru
const points: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const result = points.map((point, index) => {
  return point * 2;
});

console.log(result);

const students2 = [
  { id: 1, name: "budi" },
  { id: 2, name: "joko" },
  { id: 3, name: "siti" },
];
// [1,2,3]
// ["budi", "joko", "siti"]

const result2 = students2.map((student) => {
  return student.name;
});

console.log(result2);

// FOREACH -> melakukan looping pada array tapi tidak mereturn array baru
const fruits4: string[] = ["orange", "banana", "mango", "apple"];

fruits4.forEach((fruit, index) => {
  console.log(fruit);
  console.log(index);
});

// FILTER -> melakukan looping pada array dan menghasilkan array baru berdasarkan kondisi pada return functionnya
const ages: number[] = [44, 12, 23, 55, 34, 16, 14, 22];

const result3 = ages.filter((age) => {
  return age > 20;
});

console.log(result3);

// FIND -> mencari value yag ditemukan pertama kali dalam array
const ages2: number[] = [44, 12, 23, 55, 34, 16, 14, 22];

const result4 = ages2.find((age) => {
  return age === 55;
});

console.log(result4);

// FIND INDEX -> sama kaya find tapi yang dihasilkan adalah indexnya. kalo tidak ketemua akan menghasilkan -1
const students3 = [
  { id: 101, name: "budi" },
  { id: 102, name: "joko" },
  { id: 103, name: "siti" },
  { id: 104, name: "jack" },
];

const result5 = students3.findIndex((student) => {
  return student.id === 104;
});

console.log(result5);

// REDUCE ->
const numbers2: number[] = [44, 12, 23, 55, 34, 16, 14, 22];

const result6 = numbers2.reduce((a, b) => {
  return a + b;
});

console.log(result6);
