'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments("id")  
      table.string("title",45)
      table.integer("serial_number")
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BooksSchema

