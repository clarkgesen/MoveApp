const router = require('express').Router();
const path = require('path');
const db = require('../models');
// Activities
// GET index, get all activities
router.get('/activities', (req, res) => {
  db.Activity.findAll()
    .then((activities) => {
      console.log(activities);
      res.json(activities);
    });
});
// POST create, create a new activity
router.post('/activities', (req, res) => {
  const activity = req.body;
  // console.log(activity);
  db.Activity.create(activity)
    .then((results) => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        errors: err.errors,
      });
    });
});

router.get('/activities/:name', (req, res) => {
  const { name } = req.params;
  console.log(name);
  db.Activity.findAll({
    where: {
      name,
    },
  }).then((response) => {
    console.log(response);
    res.json({
      success: true,
    });
  });
});
// DELETE deletes an activity by id
router.delete('/activities/:id', (req, res) => {
  const { id } = req.params;
  db.Activity.destroy({
    where: {
      id,
    },
  }).then((response) => {
    res.json({
      success: true,
    });
  });
});
// PUT updates an activity by id
router.put('/activities/:id', (req, res) => {
  res.send('updates an activity by id');
});
// GET individual activity by id
router.get('/activities/:id', (req, res) => {
  res.send('gets individual activity');
});

router.get('/Weight', (req, res) => {
  db.weight.findAll()
    .then((weight) => {
      // console.log(weight);
      res.json(weight);
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
});

module.exports = router;
