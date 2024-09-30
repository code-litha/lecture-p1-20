class Category {
  constructor (id, name) {
    this.id = id
    this.name = name
  }
}

class Food {
  constructor (id, name, price, CategoryId, CategoryName) {
    this.id = id
    this.name = name
    this.price = price
    this.CategoryId = CategoryId
    this.CategoryName = CategoryName
  }
}

class Factory {
  static createCategory (id, name) {
    return new Category(id, name)
  }

  static createFood (id, name, price, CategoryId, CategoryName) {
    return new Food (id, name, price, CategoryId, CategoryName)
  }
}
module.exports = Factory