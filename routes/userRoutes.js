// const fs = require('fs')
// const { join } = fs
const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
    res.send('All users')
})

router.post('/', function (req, res) {
    res.send('Got a POST request')
})

router.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})

router.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user')
})

module.exports = router;