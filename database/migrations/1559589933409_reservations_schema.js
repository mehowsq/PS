'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationsSchema extends Schema {
  up () {
    this.alter('reservations', (table) => {
      table.specificType('user','int(10)').unsigned().references("id").inTable("users").onUpdate("CASCADE")
      table.specificType('book','int(10)').unsigned().references('id').inTable('books').onUpdate("CASCADE")
    })
  }

  down () {
    this.alter('reservations', (table) => {
      table.dropForeign('user')
      table.dropForeign('book')
    })
  }
}

module.exports = ReservationsSchema
