const express = require('express');

const searchController = require('../controllers/search.controller');

const searchRouter = express.Router()

searchRouter.post('/', searchController.getSpotifyLink)

module.exports = searchRouter