var express = require('express');
const multer  = require('multer')

var router = express.Router();
var user = require('../controller/usercontroller');

//Set Storage
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

router.post('/',upload.single('image'),user.puzzle);
router.post('/category',upload.single('image'),user.category);
router.get('/select/:id',user.select);
router.get('/all_category',user.get_all_cat);

module.exports = router;
