'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReservationsSchema extends Schema {
  up () {
    this.create('reservations', (table) => {
      table.increments("id")
      table.timestamp('created_at').defaultTo(this.fn.now());
      table.timestamp('end_date')
      table.timestamp('return_date')
    })
  }

  down () {
    this.drop('reservations')
  }
}

module.exports = ReservationsSchema
