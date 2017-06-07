
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('experiences').del()
    .then(function () {
      // Inserts seed entries
      return knex('experiences').insert([
        {id: 1, review: 'great service', rest_id: 1},
        {id: 2, review: 'friendly service', rest_id: 2},
        {id: 3, review: 'slow service', rest_id: 3}
      ]);
    });
};
