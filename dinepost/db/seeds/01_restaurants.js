
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('restaurants').del()
    .then(function () {
      // Inserts seed entries
      return knex('restaurants').insert([
        {id: 1, name: 'applebees', location:'phoenix'},
        {id: 2, name: 'chick_fil_a', location:'chandler'},
        {id: 3, name: 'wildflower', location:'goodyear'}
      ]);
    });
};
