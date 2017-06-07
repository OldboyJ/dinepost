
exports.up = function(knex, Promise) {
  return knex.schema.createTable('restaurants', function(table){
    table.increments();
    table.string('name').notNullable();
    table.string('location').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  })
  .createTable('experiences', function(table){
    table.increments();
    table.string('review').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.integer('rest_id').references('id').inTable('restaurants');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('restaurants').dropTable('experiences');
};
