// controllers/registerController.js

const { User } = require("../DB_connection.js");

module.exports = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).send("Faltan datos");

    // Verificar si el usuario ya existe
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) return res.status(409).send("El usuario ya existe");

    // Crear un nuevo usuario
    const newUser = await User.create({ email, password });

    return res.json({ success: true, user: newUser });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
