const express = require('express');
const Lives = require('../controller/lives');
const router = express.Router();

router.get('/:roomId', Lives.getStreamUrl)
router.get('/info/:roomId', Lives.getTitle)
router.get('/comments/:roomId', Lives.getComments)
router.get('/rank/:roomId', Lives.getRank)
router.get('/gift/:roomId', Lives.getAllGift)

module.exports = router;