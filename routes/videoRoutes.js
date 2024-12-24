const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload'); // assuming you have multer set up
const auth = require('../middleware/auth'); // Authentication middleware
const { uploadVideo, getVideos, likeVideo, commentOnVideo,getSavedVideos,saveVideo } = require('../controllers/videoController');

router.post('/upload',auth, upload.single('video'), uploadVideo);
router.get('/videos', getVideos);
router.put('/like/:id',auth, likeVideo);
router.post('/comment/:id',auth, commentOnVideo);



router.get('/saved', auth, getSavedVideos); // Get saved videos route
router.post('/save', auth, saveVideo); // Save video route
module.exports = router;
