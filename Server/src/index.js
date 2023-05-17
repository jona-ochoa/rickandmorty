const http = require('http');
const getCharById = require('./controllers/getCharById');

const PORT = 3001

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    const id = req.url.split('/').at(-1) // at para quedernos con el ultimo

    if(req.url.includes('rickandmorty/character')){
        getCharById(res, id)
    }
        
}).listen(PORT, 'localhost');
