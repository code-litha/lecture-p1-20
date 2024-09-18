// 1. abstraction => kita tahu kegunaannya untuk apa, namun kita ga tahu bagaimana itu terjadi
// contoh, Date
// const now = new Date()
// console.log(now)

// 2. encapsulation => jika misalkan kita ingin melakukan hide terhadap suatu property
//                  => kita akan buat sebuah "private property"
//                  => 1. define nama property sebelum constructor dengan ditambah "#"
//                  => 2. di dalam constructornya, buat propertynya seperti `this.#namaProperty`


class Product {
  #stock 
  #brand
  constructor (type = '', brand = '', stock = 0, price = 0) {
    this.type = type
    this.#brand = brand
    this.#stock = stock
    this.price = price
    this.customers = [] // array of instance dari Customer
  }

  // getter => special function yang digunakan untuk mengambil sebuah property (public / private) dari object instance
  get stock () {
    return this.#stock
  }

  get brand () {
    return this.#brand
  }

  // setter => special function yg digunakan untuk mengganti value dari sebuah property dari object instance
  set stock (value) {
    this.#stock = value 
    // tidak perlu return
  }

  information () {
    // private property bisa di access di dalam instance method
    return `${this.#brand} mempunyai stock ${this.#stock}`
  }

  addCustomer (name = '') {
    // if () {
    //   let count = Math.random()
      // for (...) {
        let newCust = new Customer(name)
        this.customers.push(newCust)
    //   }

    // }
  }
}

// Inheritance => turunan dari bapak ke anak
//            => saat bikin class harus extends dari bapaknya
//            => di dalam contructornya harus ada super()
// Electronic anak dari Product 
// jadi semua property dan method yg ada di parent, bisa di gunakan/akses di child
class Electronic extends Product {
  #powerSupply
  constructor (brand, stock, price, powerSupply) {
    super("Electronic", brand, stock, price)
    this.#powerSupply = powerSupply
  }

  get powerSupply () {
    return this.#powerSupply
  }

  getDiscount () {
    return this.price * 0.8 
  }

  information () {  // POLYMORPHISM => overriding instance method yg sama dari parent
    return `${this.brand} memakai daya sebesar ${this.#powerSupply}`
  }
}

class Furniture extends Product {
  constructor (brand, stock, price, color) {
    super("Furniture", brand, stock, price)
    this.color = color
  }
}

class Customer {
  constructor (name) {
    this.name = name
  }
}

const honda = new Product('car', 'honda', 20, 400_000_000)
// console.log(honda.powerSupply, '<<< powerSupply hondaa')
// console.log(honda.getDiscount(), '<<< getDiscount() hondaa')
// console.log(honda.information(), '<<< information honda')
honda.addCustomer('Adel')
honda.addCustomer('Oka')
console.log(honda)

// const kulkas = new Electronic('Modena', 10, 10_000_000, '600W')
// console.log(kulkas.powerSupply)
// console.log(kulkas.getDiscount())
// console.log(kulkas.information(), '<<< information kulkas')

// const tv = new Electronic('LG', 30, 30_000_000, '500W')
// console.log(tv)