const express = require('express');
const { GetUsers, GetUser, AddUser, DeletUser, UpdateUser } = require('../controllers/userController')
const router = express.Router();

router.get('/users', GetUsers);
router.get('/users/:id', GetUser);
router.post('/users', AddUser);
router.delete('/users/:id', DeletUser);
router.put('/users/:id', UpdateUser);

module.exports = router;