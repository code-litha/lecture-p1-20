"use strict";

// const perkalian = require('./calculator.js')  // require(path)
// console.log(perkalian(10, 30), '<<< multiply')

// const calculator = require('./calculator.js')
// console.log(calculator.multiply(30, 30), '<<< multiply')
const greetings = require('./helpers/greetings.js')
const { multiply, substract, pertambahan } = require('./calculator.js')

// console.log(greetings('Raffles'), '<<< raffles')
// console.log(multiply(30, 30), '<<< multiply')
// console.log(substract(300, 30), '<<< substract')
// console.log(pertambahan(300, 30), '<<< pertambahan')

/*
  1. DATA TYPE STRUCTURE
    - Array 
      - []
      - ada index
      - ada length
    - Object
      - ada key dan value
      - {}
  2. BASIC DESTRUCTURE
  3. PASS BY REFERENCES VS PASS BY VALUES
  4. SPREAD OPERATOR
  5. USE STRICT
  6. ARROW FUNCTION
  7. MODULE EXPORTS
  8. BUILT IN FUNCTION
      - .forEach
      - .map
      - .filter
      - .find
*/


let tempArr = [1, 2, 3, 4, 5];
let obj = {
  name: "david",
  age: 23,
  gender: "unknown",
};

// const name = obj.name;
// const name2 = obj["name"];
// console.log(name, "<<< name obj");
// console.log(name2, "<<< name2 obj");

let { age, gender, name } = obj; // DESTRUCTURING OBJECT
// console.log(name, "<<< name");
// console.log(age, "<<< age");
// console.log(gender, "<<< gender");

// DESTRUCTURING ARRAY  => urutan sangat berpengaruh
let [arrIndex0, arrIndex1, arrIndex2, arrIndex3, arrIndex4] = tempArr;
// console.log(arrIndex0, "<<< arrIndex0");
// console.log(arrIndex1, "<<< arrIndex1");
// console.log(arrIndex2, "<<< arrIndex2");
// console.log(arrIndex3, "<<< arrIndex3");
// console.log(arrIndex4, "<<< arrIndex4");

let studentObj = {
  name: "seno",
  age: 22,
  gender: "unknown",
};
let { name: nameStudent, age: ageStudent, gender: genderStudent } = studentObj;
// let nameStudent = studentObj.name
// let ageStudent = studentObj.age
// let genderStudent = studentObj.gender
// console.log(nameStudent, "<<< nameStudent");
// console.log(ageStudent, "<<< ageStudent");
// console.log(genderStudent, "<<< genderStudent");

let arr1 = ["a", "b"];
// let arr2 = arr1;       // PASS BY REFERENCES
// arr2.push("c");

// Cara 1 handle pass by reference => buat array baru, lalu looping
// let arr2 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(arr1[i]);
// }
// arr2.push("c");

// Cara 2 handle pass by reference => SPREAD OPERATOR (...)
// => DUPLICATE / NGAMBIL SEMUA ISI DARI SEBUAH ARRAY / OBJECT
// let arr2 = [...arr1];
// arr2.push("c");
let arr2 = ["x", ...arr1, "c"];

// console.log(arr1, "<<< arr1");
// console.log(arr2, "<<< arr2");

let studentObj2 = {
  ...studentObj,
  name: "adel",
  phase: 1,
  ...arr1,
};
// studentObj2["phase"] = 1;
// studentObj2.phase = 1;

// console.log(studentObj, "<<< studentObj");
// console.log(studentObj2, "<<< studentObj2");

// PASS BY VALUES => data primitive
let str1 = "hello world";
let str2 = str1;
str2 = "hallo dunia";

// console.log(str1, "<<< str1");
// console.log(str2, "<<< str2");

function sum(a, b) {
  // "use strict"
  return a + b;
}
// console.log(sum(5, 10), "<<< sum");

// ARROW FUNCTION
let sum2 = (a, b) => {
  console.log('isi sum2')
  return a + b
}
// console.log(sum2(10, 30), '<<< sum2')

let sum3 = (a, b) => a + b
// console.log(sum3(40, 30), '<<< sum3')

function sum4 (a, b) { return a + b }
// console.log(sum4(50, 100), '<<< sum4')

let arrNumbers = [1, 2, 3, 4, 5, 6, 7]

// for (let i = 0; i < arrNumbers.length; i++) {
//   let element = arrNumbers[i]
//   console.log(element, '<<< element')
// }

// .forEach => looping array saja semua element dengan iterasi + 1
//          => tidak buat array baru, jadi tidak perlu return dalam functionnya
// arrNumbers.forEach(function (element, index) {
//   console.log(element, '<<< element, ', index , '<<< index, ')
// })

// arrNumbers.forEach((el, i) => {
//   console.log(el, '<<< el, ', i , '<<< i, ')
// })

// .map => buat array baru dari array lama dengan length yang sama
//      => harus ada return di dalam functionnya, supaya tidak undefined
const arrNumberMapping = arrNumbers.map((el) => {
  console.log(el, '<<< el')

  return el * 3
})
console.log(arrNumberMapping, '<<< arrNumberMapping')

// .filter => buat array baru yang mempunyai element yang passed / lulus dari kondisi yang kita buat
//         => HARUS RETURN KONDISI
//         => kalau ga ada yang memenuhi kondisi, akan menghasilkan array kosong []

const arrEvens = arrNumbers.filter(el => {
  return el % 2 === 0
  // return (el % 2 === 0) && (el > 10)
})

console.log(arrEvens, '<<< arrEvens')

// .find => cari element pertama yang passed / lulus dari kondisi yang kita buat
//       => HARUS RETURN KONDISI
//       => kalau ga ada yang memenuhi kondisi, akan menghasilkan undefined

const firstEven = arrNumbers.find(el => {
  return el % 2 === 0
  // return (el % 2 === 0) && (el > 10)
})

console.log(firstEven, '<<< firstEven')
