// const express = require('express')
// const router = express.Router();

import { Router } from 'express';
import * as userController from '../controllers/userController';
const router = Router();

router.get('/', userController.fetchAll);

router.post('/', function (req, res) {
    res.send('Create user')
})

router.put('/:id', function (req, res) {
    res.send('Update user')
})

router.delete('/:id', function (req, res) {
    res.send('Delete user')
})

// module.exports = router;
export default router;