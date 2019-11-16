const express = require('express');

//data
const data = require('../data/sideVideos');

const router = express.Router();

//route

router.get('/', (request, response) => {
    const videos = data;

    response.send(videos);
})

module.exports = router;