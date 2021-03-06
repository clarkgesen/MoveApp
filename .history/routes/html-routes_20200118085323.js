const path = require('path');
const router = require('express').Router();

router.get('/activities', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/activity.html'));
});



router.get('/activities/add', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/weight', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/weight.html'));
});
router.get('/meal', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/meal.html'));
});

router.get('/');

// Place this route below all others to send he index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;