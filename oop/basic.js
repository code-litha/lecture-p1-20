// let student1 = {   // object literal
//   nama: 'David',
//   age: 23,
//   gender: 'male'
// }

// let student2 = {
//   name: 'Oka',
//   age: 24,
//   gender: 'female'
// }

// let students = [student1, student2]

// students.forEach(el => {
//   console.log(el.name, '<<< name')
// })

// struktur OOP / pondasi => class NamaClass {}
/*
  ketentuan pembuatan nama class :
    - harus PascalCase
    - harus Singular
    - harus English
*/
class Student {
  // define properties / key  => public properties
  // name
  // age
  // gender

  // constructor => sebuah function / method yang HANYA DIJALANKAN PERTAMA KALI SAAT INSTANTIATE 
  constructor (namaStudent = '', umurStudent = 7, jenisKelaminStudent = 'unknown') {
    // console.log('constructor dijalankan')
    // console.log(namaStudent, '<<< namaStudent di constructor')
    // console.log(umurStudent, '<<< umurStudent di constructor')
    // console.log(jenisKelaminStudent, '<<< jenisKelaminStudent di constructor')
    this.name = namaStudent
    this.age = umurStudent
    this.gender = jenisKelaminStudent
    // this.score = Math.random() * 100
    this.score = this.randomScore()
    this.address = ''
    this.foods = []
  }

  // instance method => sebuah function / method yang ada di dalam class
  //                 => hanya bisa dipanggil dari object instance atau di dalam class itu sendiri
  getDescription () {
    return `${this.name} berjenis kelamin ${this.gender} dan berumur ${this.age}`
  }

  getInfo () {
    this.getDescription()
  }

  randomScore () {
    return Math.random() * 100
  }

  eat (food = '') {
    console.log(`${this.name} suka makan ${food}`)

    return this   // ini digunakan hanya jika ingin melakukan chaining antar method
  }

  drink (bevarage = '') {
    console.log(`${this.name} suka minum ${bevarage}`)

    return this
  }

  watch (movie = '') {
    console.log(`${this.name} menonton ${movie}`)

    return this
  }
}

class Instuctor {
  constructor () {
    
  }
}

// instantiate => pemanggilan sebuah class dengan cara `new NamaClass()`
//             => hasil dari instantiate itu disebut dengan object instance
// new NamaClass(args1, args2, ....) => args itu sebuah argument yg akan menjadi value dari params constructor

let student1 = new Student('David', 23, 'male')    // student1 adalah object instance
// student1.name = 'David'   // assign value ke properties
// student1.age = 17
// student1.gender = 'male'
// student1.phase = 1
// console.log(student1, '<<< student 1')
// console.log(student1.age, '<<< access property dari object instance')
// console.log(student1.getDescription(), '<<<< getDescription')
// student1.eat('Nasi')
// student1.drink('Tequila')
// student1.watch('One Piece')

// student1.eat('Nasi').drink('Tequila').watch('One Piece')

console.log(student1.eat('Nasi'))
// console.log(new Student())

// let student2 = new Student()
// console.log(student2, '<<< student 2')

// let str1 = '1-2-3-4-5-6-7-8-9' // "123456789"

// // let str2 = str1.split('-')
// // let str3 = str2.join('')
// // console.log(str3, '<<< str3')

// let result = str1.split('-').join('') // CHAINING
// console.log(result, '<<< result')