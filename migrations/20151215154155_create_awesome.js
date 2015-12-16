exports.up = function(knex, Promise) {
  return knex.schema.createTable('awesome', function(table){
    table.increments();
    table.string('activity');
    table.string('enjoyment');
    table.string('type');
    table.integer('hours');
    table.boolean('explicit');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('awesome');
};
