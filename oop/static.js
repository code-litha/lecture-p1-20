class Calculator {
  constructor () {
    this.value = 10     // public property
  }

  static result = 100             // static property

  // instance method
  sum (a, b) {
    console.log(this.value, '<<< property value di sum')
    console.log(this.result, '<<< static result di sum')
    return a + b
  }

  // static method 
  static multiply (a, b) {
    console.log(this.value, '<<< property value di static multiply')
    console.log(this.result, '<<< static result di multiply')
    return a * b
  }

  static substract (a, b) {

  }
}

// const calc = new Calculator()
// console.log(calc.sum(2, 10), '<<< sum instance method')

// const calc2 = Calculator.multiply(10, 5)
// console.log(calc2, '<<< calc2 static method')

class Student {
  constructor (name = '', gender = '', phase = 0) {
    this.name = name
    this.gender = gender
    this.phase = phase
  }
}

class StudentPhase0 extends Student {
  constructor (name, gender) {
    super(name, gender, '0')
  }
}

class StudentPhase1 extends Student {
  constructor (name, gender) {
    super(name, gender, '1')
  }
}

class StudentPhase2 extends Student {
  constructor (name, gender) {
    super(name, gender, '2')
  }
}

class Factory {
  static createStudent (name = '', gender = '', phase = 0) {
    if (phase === 0) {
      return new StudentPhase0(name, gender)
    }

    if (phase === 1) {
      return new StudentPhase1(name, gender)
    }

    if (phase === 2) {
      return new StudentPhase2(name, gender)
    }

    return new Student(name, gender, phase)
  }

  static createStudent2 (name = '', gender = '', phase = 0) {
    return this.createStudent(name, gender, phase)  // static method bisa memanggil static method yg lain
  }
}

const raffles = Factory.createStudent('raffles', 'unknown', 1)
const naufal = Factory.createStudent2('naufal', 'unknown', 2)

console.log(raffles, '<<< raffles')
console.log(naufal, '<<< naufal')

// const raffles = new StudentPhase1('raffles', 'unknown')
// const naufal = new StudentPhase2('naufal', 'unknown')
