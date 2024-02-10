const express = require('express');
const router = express.Router();
const petController  = require('../controllers/PetController');


// Get all pets
router.get('/pets', petController.getAllPets);

// Get a pet by ID
router.get('/pets/:id', petController.getPetById);

// Create a new pet
router.post('/pets', petController.createPet);

// Update a pet by ID
router.put('/pets/:id', petController.updatePetById);

module.exports = router;
