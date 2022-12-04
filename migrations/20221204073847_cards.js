/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cards', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('image')
    table.string('effect_target')
    table.string('effect_value')
    table.string('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
