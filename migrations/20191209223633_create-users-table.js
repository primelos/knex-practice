
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments();
      tbl.text('username', 128)
        .unique()
        .notNullable();
      tbl.text('website');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
