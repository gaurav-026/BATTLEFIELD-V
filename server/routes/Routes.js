const express = require('express');
const { postData } = require('../controllers/PostData');
const { getData } = require('../controllers/getData');
const { updateData } = require('../controllers/updatePostData');
const router = express.Router();




router.get('/', (req, res)=>{
    res.send("SERVER IS RUNNING SUCCESSFULLY");
})
router.post('/postData', postData);
router.get('/getData', getData);
router.post('/updateData', updateData);




module.exports = router;