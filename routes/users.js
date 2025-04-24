var express = require('express');
var router = express.Router();
const User = require('../models/User');

/* get all users from table */
router.get('/', async (req, res) => {
  try {
    const usuarios = await User.find();
    res.send(usuarios);
  } catch (err) {
    res.status(500).send({ error: 'Failed to fetch users' });
  }
});

/* create an user. */
router.post('/create', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(400).send({ error: 'Error at saving the user information' });
  }
});

module.exports = router;
