const UserSchema = require("../schema/UserSchema");


    // Get all users
    exports.getAllUsers= async (req, res) => {
      try {
        const users = await UserSchema.find();
        res.json(users);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Get a single user by ID
    exports.getUserById= async (req, res) => {
      try {
        const user = await UserSchema.findById(req.params.id);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
    },
  
    // Create a new user
    exports.createUser= async (req, res) => {
      try {
        const user = await UserSchema.create(req.body);
        res.status(201).json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    },
  
    // Update an existing user by ID
    exports.updateUserById= async (req, res) => {
      try {
        const user = await UserSchema.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
    }
  
  
  
  