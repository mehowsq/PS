'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up () {
    this.table('books', (table) => {
      table.specificType('author','int(10)').unsigned().references("id").inTable("authors").onUpdate("CASCADE")
    })
  }

  down () {
    this.table('books', (table) => {
      table.dropForeign('author');
    })
  }
}

module.exports = BooksSchema
