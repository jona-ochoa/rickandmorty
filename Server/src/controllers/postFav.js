const { Favorite } = require("../DB_connection");

module.exports = async (req, res) => {
  try {
    const { id, name, origin, status, gender, image, species } = req.body;
    if (!name || origin || status || gender || image || species){
      return res.status(401).send("Faltan datos");
    }

    await Favorite.findOrCreate({
      where: { id, name, origin, status, gender, image, species },
    });

    const allFavorites = await Favorite.findAll();
    return res.json(allFavorites);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
