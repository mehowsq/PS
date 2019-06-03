'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AuthorsSchema extends Schema {
  up () {
    this.create('authors', (table) => {
      table.increments("id")
      table.string("full_name",100)
    })
  }

  down () {
    this.drop('authors')
  }
}

module.exports = AuthorsSchema
