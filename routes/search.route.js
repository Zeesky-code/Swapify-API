const express = require('express');
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' });

const searchController = require('../controllers/search.controller');

const searchRouter = express.Router()

searchRouter.post('/', upload.single('avatar'), searchController.getSpotifyLink)

module.exports = searchRouter