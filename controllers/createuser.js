const userModel = require('../schema/user');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    //crypty l password
    const hashedPassword = await bcrypt.hash(password, 10);

    
    const full_name = `${first_name} ${last_name}`;

    // asna3 user jdid
    const user = new userModel({
      first_name,
      last_name,
      full_name,
      email,
      password: hashedPassword,
    });

    // Save fel base de donnes
    await user.save();

    
    res.status(201).json(user);
  } catch (error) {
    
    console.error(error);

    
    res.status(500).json({ error: 'Failed to create user' });
  }
};

module.exports = createUser;
