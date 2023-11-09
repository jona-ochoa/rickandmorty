const { getCharById } = require('../controllers/getCharById');
const login = require('../controllers/login');
const postUser = require('../controllers/postUser');
const postFav = require('../controllers/postFav');
const deleteFav = require('../controllers/deleteFav')
const registerController = require('../controllers/register')


const router = require('express').Router()

router.get('/login', login);
router.post('/login', postUser);
router.post('/fav', postFav)
router.delete('/fav/:id', deleteFav)
router.get('/character/:id', getCharById);
router.post('/register', registerController);

module.exports = router;