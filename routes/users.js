var express = require('express');
var router = express.Router();

const userController = require('../controllers/user')

/* GET users listing. */
router.get('/status', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', userController.create)
router.get('/:userId', userController.get)
router.put('/', userController.update)
router.delete('/', userController.del)

module.exports = router;
