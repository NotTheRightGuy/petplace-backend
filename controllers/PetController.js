const PetSchema = require("../schema/PetSchema");

  //get all the pets
  exports.getAllPets= async (req, res) => {
    try {
      const pets = await PetSchema.find();
      res.json(pets);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }

  //get single pet by ID
  exports.getPetById= async (req, res) => {
    try {
      const pet = await PetSchema.findById(req.params.id);
      if (!pet) {
        return res.status(404).json({ err: "pet not found" });
      }
      res.json(pet);
    } catch (err) {
      res.status(500).json({ err: err.message });
    }
  }

  //create a new pet
  exports.createPet= async (req, res) => {
    try {
      const pet = await PetSchema.create(req.body);
      res.status(201).json(pet);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  }

  //update an existing pet by ID
  exports.updatePetById= async (req, res) => {
    
    try {
      const pet = await PetSchema.findByIdAndUpdate(req.params.id, {
        new: true,
      });
      if (!pet) {
        return res.status(404).json({ err: "Pet not found" });
      }
      res.json(pet);
    } catch (err) {
      res.status(400).json({ err: err.message });
    }
  }
 