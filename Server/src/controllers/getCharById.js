const axios = require('axios')

const getCharById = (res, id) => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => res.data)
        .then(data => {
            const character = {
                id: data.id,
                name: data.name,
                genderid: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status,
            }
            res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch((err)=> {
            res
            .writeHead(500, { "Content-type": "text/plain" })
            .end(`Personaje con id ${id} no encontrado`)
        })
} 

module.exports = getCharById
