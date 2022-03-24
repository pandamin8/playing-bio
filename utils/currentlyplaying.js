const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
const authentication = require('./authentication')
const router = express.Router()

var spotifyApi = authentication.spotifyApi

router.get('/currently-playing', async (req, res) => {
    try {
        const currently_playing = await spotifyApi.getCurrentPlaying()
        res.send(currently_playing)
    } catch (e) {
        if (e instanceof Error) {
            res.status(400).send({ error: e.message })
        }
    }
})

module.exports = router

