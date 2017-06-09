
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('reviews').del()
    .then(function () {
      // Inserts seed entries
      return knex('reviews').insert([
        {id: 1, name: 'applebees', category:'lunch', review: 'great happy hour', grade:'A'},
        {id: 2, name: 'chick_fil_a', category:'lunch', review: 'food is delicious', grade:'A'},
        {id: 3, name: 'wildflower', category:'dinner', review: 'healthier eating options, good atmosphere', grade:'B'}
      ]);
    });
};
