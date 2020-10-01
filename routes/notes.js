const express = require('express');
const router = express.Router();

const client = require('../database/utils')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('notes', { title: 'Express' });
});

router.post('/', function(req, res, next) {
    client.query(
        `INSERT INTO note (val) VALUES (${req.body})`,
        (err, res) => {
            console.log(err, res);
            client.end();
        }
    )
});

module.exports = router;
