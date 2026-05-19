// ============= OBJECT =============

const obj1 = {}; // cara 1
const obj2 = new Object(); // cara 2

interface Address {
  street: string;
  city: string;
  zipCode: number;
}

interface User {
  age: number;
  job: string;
  name: string;
  address: Address;
  hobby: string[];
  makan: () => void;
  gender?: string; // opsional
}

const user: User = {
  age: 17,
  job: "programmer",
  name: "jordan",
  address: {
    street: "Jl. soekarno hatta",
    city: "jakarta",
    zipCode: 12345,
  },
  hobby: ["ngoding", "basket", "mancing"],
  makan() {
    console.log("makan");
  },
};

console.log(user.name); // cara 1
console.log(user["job"]); // cara 2
console.log(user.address.city);
console.log(user.hobby[1]);
user.makan();

// ============= ADD PROPERTY =============
const person: any = {
  name: "jack",
  age: 30,
};

console.log(person);

person.hobby = "ngoding";

console.log(person);

person["address"] = "jakarta";

console.log(person);

// ============= DELETE PROPERTY =============

delete person.name;

console.log(person);

// ============= IMMUTABLE & MUTABLE =============

// immutable: merujuk pada tipe data yang tidak bisa diubah setelah dibuat (primitive data types)
// mutable: merujuk pada tipe data yang bisa diubah stelah dibuat (non primitive data types)

// immutable
let count: number = 10;
let count2: number = count;

count2 = 70;

console.log(count);
console.log(count2);

// mutable
const orang1: any = { name: "budi" };
// const orang2: any = orang1;
const orang2: any = { ...orang1 }; // shallow copy

orang2.age = 40;

console.log(orang1);
console.log(orang2);

// ============= OPTIONAL CHAINING =============

const user2: any = {};

console.log(user2.address);
console.log(user2.address?.street);

// ============= FOR IN =============

const person2: any = {
  name: "siti",
  age: 20,
  hobby: "ngoding",
};

for (let key in person2) {
  console.log(key);
  console.log(person2[key]);
}

// ============= DESTRUCTURING ASSIGNMENT =============
// mengeluarkan property dalam object/array menjadi variable

// versi object
const animal = {
  name: "zack",
  age: 2,
};

console.log(animal.name);
console.log(animal.age);

const { name, age } = animal;
console.log(name);
console.log(age);

// versi array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = array;
console.log(a);
console.log(b);

// ============= SPREAD OPERATOR =============
// digunakan. untuk copy isi object / menggabungkan object

const objectOne = { name: "budi", email: "budi@mail.com" };
const objectTwo = { password: "Admin123", name: "joko" };

const result = { ...objectOne, ...objectTwo };

console.log(result);

// ============= THIS KEYWORD =============
// mengakses property lain dalam object/class

const person3 = {
  firstName: "jack",
  lastName: "blake",
  greet() {
    console.log(`Hello, ${this.firstName} ${this.lastName}`);
  },
};

person3.greet();

// ============= CLASS =============
// template / cetakan untuk membuat object

// class declaration
class Person {
  greet() {
    console.log("hello");
  }
}

// class expression
const Person2 = class {
  greet() {
    console.log("hello");
  }
};

const human = new Person();
const human2 = new Person();

human.greet();
human2.greet();

// ============= CONSTRUCTOR =============
// method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru

class Vehicle {
  brand: string;
  type: string; // Access Modifier (public)
  #chassisNumber: string; // Access Modifier (private)

  constructor(brand: string, type: string, chassisNumber: string) {
    this.brand = brand;
    this.type = type;
    this.#chassisNumber = chassisNumber;
  }

  startEngine() {
    this.#test();
    return `${this.brand} ${this.type} engine started!`;
  }

  // Access Modifier (private)
  #test() {
    console.log("test");
  }
}

const kendaraan = new Vehicle("Toyota", "Avanza", "123123");
const kendaraan2 = new Vehicle("Toyota", "Agya", "321321");
const kendaraan3 = new Vehicle("Toyota", "Innova", "234234");

console.log(kendaraan.brand);
console.log(kendaraan.type);
// console.log(kendaraan.#chassisNumber);
console.log(kendaraan.startEngine());

console.log(kendaraan2.brand);
console.log(kendaraan2.type);
console.log(kendaraan2.startEngine());

console.log(kendaraan3.brand);
console.log(kendaraan3.type);
console.log(kendaraan3.startEngine());

// ============= INHERITANCE =============
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa diakses oleh child class

// TIDAK MENGGUNAKAN INHERITANCE
class Employee {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager {
  name: string;
  salary: number;
  departement: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.departement = department;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

// MENGGUNAKAN KONSEP INHERITANCE
class Employee2 {
  name: string;
  salary: number;

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  work() {
    console.log(`${this.name} is working`);
  }
}

class Manager2 extends Employee2 {
  departement: string;

  constructor(name: string, salary: number, department: string) {
    super(name, salary);
    this.departement = department;
  }
}

const manager = new Manager2("joko", 6000000, "HR");

console.log(manager.name);
console.log(manager.salary);
console.log(manager.departement);
console.log(manager.work());
