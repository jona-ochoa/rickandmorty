const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}/${id}`)
    const { name, gender, origin, status, image, species } = response.data;
    let character = { id, name, species, gender, origin, image, status };
    return character.name ? res.status(200).json(character) : res.status(404).send("Not found")
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

const getAllCharacters = async (req, res) => {
  try {
    const response = await axios.get(`${URL}/character`);
    const characters = response.data.results;
    return res.status(200).json(characters);
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = {
  getCharById,
  getAllCharacters
};
