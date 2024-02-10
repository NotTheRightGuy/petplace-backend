const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');


// Get all users
router.get('/users', userController.getAllUsers);

// Get a user by ID
router.get('/users/:id', userController.getUserById);

// Create a new user
router.post('/users', userController.createUser);

// Update a user by ID
router.put('/users/:id', userController.updateUserById);

module.exports = router;