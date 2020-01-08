const path = require('path');
const router = require('express').Router();
// dashboard route
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
// Place this route below all others to send the index.html file
// to any request that is not explicitly defined above
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
router.get('/activities', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/activities.html'));
});
router.get('/nutrition', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/nutrition.html'));
});
module.exports = router;
