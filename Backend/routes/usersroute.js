const express = require('express');
const router = express.Router();
const userscontroller = require('../controllers/userscontroller');
const verifyToken = require('../middlewares/verifyToken');
const { authorizeRole } = require('../middlewares/authorizeRole');

//Route public
router.post('/login', userscontroller.loginUser);
router.post('/register', userscontroller.createUser);

// Route privé (JWT obligatoire)
router.get('/', verifyToken, authorizeRole('admin'), userscontroller.getAllUsers);
router.get('/:id', verifyToken, authorizeRole('admin'), userscontroller.getUserById);
router.put('/:id', verifyToken, authorizeRole('admin'), userscontroller.updateUser);
router.delete('/:id', verifyToken, authorizeRole('admin'), userscontroller.deleteUser);
router.post('/logout', userscontroller.logoutUser);
module.exports = router;