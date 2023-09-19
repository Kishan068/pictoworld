var express = require('express');

var router = express.Router();
var user = require('../controller/usercontroller');


router.post('/',user.puzzle);
router.post('/category',upload.single('image'),user.category);
router.get('/select/:id',user.select);
router.get('/all_category',user.get_all_cat);

module.exports = router;
