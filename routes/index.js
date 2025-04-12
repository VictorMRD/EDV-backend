var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/ping', (req, res) => {
  res.send('pong 🏓 v2');
});

module.exports = router;