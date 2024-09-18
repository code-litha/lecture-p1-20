const multiply = (a, b) => {
  return a * b
}

const substract = (a, b) => {
  return a / b
}

// module.exports = multiply

module.exports = {
  multiply,
  substract,
  pertambahan: function (a, b) {
    return a + b
  }
}