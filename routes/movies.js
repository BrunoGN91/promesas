var express = require('express');
var router = express.Router();
const moviesController = require('../controllers/moviesController')


router.get('/', moviesController.list);
router.get('/detail/:id', moviesController.findByPk)
router.get('/crear', moviesController.create)


module.exports = router;
