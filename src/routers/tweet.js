const express = require('express')
const Tweet = require('../models/tweet')
const router = new express.Router()

router.get('/tweets', async (req, res) => {
    res.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.append('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || req.header('referer') || req.header('host'))
    try {
        const tweet = await Tweet.find()

        res.status(200).send(tweet)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/tweets', async (req, res) => {
    const tweet = new Tweet({
        content : req.body.content
    })
    res.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.append('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || req.header('referer') || req.header('host'))
    try {
        await tweet.save()

        res.status(201).send(tweet)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/tweets/:id', async (req, res) => {
    res.append('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.append('Access-Control-Allow-Origin', req.header('origin') || req.header('x-forwarded-host') || req.header('referer') || req.header('host'))
    try {
        const tweet = await Tweet.findOneAndDelete({ _id: req.params.id})

        if (!tweet) {
            res.status(404).send()
        }

        res.send(tweet)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router