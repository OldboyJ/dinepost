var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', (req, res, next) => {
  knex.select()
      .from('restaurants')
      .then( restaurants => res.send(restaurants))
});

module.exports = router;
