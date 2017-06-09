var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/reviews', (req, res, next) => {
  knex.select()
      .from('reviews')
      .then( data => res.send(data))
});

module.exports = router;
