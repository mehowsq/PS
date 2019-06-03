'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments('id')
      table.string('email',254)
      table.string('password',45)
    });
    
  }

  down () {
    this.drop('users')
  }
}

module.exports = UsersSchema
