const express = require('express')
const router = express.Router();

router.get('/', function (req, res) {
    res.send('All users')
})

router.post('/', function (req, res) {
    res.send('Create user')
})

router.put('/:id', function (req, res) {
    res.send('Update user')
})

router.delete('/:id', function (req, res) {
    res.send('Delete user')
})

module.exports = router;