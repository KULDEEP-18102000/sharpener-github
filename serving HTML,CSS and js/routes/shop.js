const express = require('express');

const rootDir = require('../util/path');

const contactController=require('../controllers/contact')
const successController=require('../controllers/success')

const router = express.Router();

router.get('/', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

router.get('/contactus',contactController.getContact)

router.post('/success',successController.getSuccess)

module.exports = router;
