const { multiply } = require('../calculator.js')

function greetings (name = '') {
  console.log(multiply(100, 100), '<<< ini multiply di greetings')
  return `Hello, ${name} !`
}

module.exports = greetings