const { User } = require("../DB_connection");

const postUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) res.status(400).json("Faltan datos");

    const user = await User.findOrCreate({
      where: {
        email,
        password,
      },
    });

    return res.json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = postUser;
