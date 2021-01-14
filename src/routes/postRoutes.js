import { Router } from 'express';
const router = Router();

router.get('/', function (req, res) {
    res.send('All posts')
})

router.post('/', function (req, res) {
    res.send('Create post')
})

router.put('/:id', function (req, res) {
    res.send('Update post')
})

router.delete('/:id', function (req, res) {
    res.send('Delete post')
})

export default router;