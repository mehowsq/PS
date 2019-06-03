'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BazaSchema extends Schema {
  up () {
    this.table('bazas', (table) => {
      // alter table
    })
  }

  down () {
    this.table('bazas', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BazaSchema
