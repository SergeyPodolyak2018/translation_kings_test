/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('Orders', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.integer('summ').notNullable();
    table.integer('client_id').unsigned();
    table.foreign('client_id').references('Clients.id');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('Orders');
};
