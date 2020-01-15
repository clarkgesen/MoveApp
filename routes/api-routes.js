
const router = require('express').Router();
const path = require('path');
const db = require('../models');


// Activities

// GET index, get all activity
router.get('/activity', (req, res) => {
  db.Activity.findAll()
    .then((activity) => {
      res.json(activity);
    });
});
// POST create, create a new activity
router.post('/activity', (req, res) => {
  const activity = req.body;
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
// DELETE deletes an activity by id
router.delete('/activity/:id', (req, res) => {
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
router.put('/activity/:id', (req, res) => {
  res.send('updates an activity by id');
});
// GET individual activity by id
router.get('/activity/:id', (req, res) => {
  res.send('gets individual activity');
});

//* ****** DASHBOARD *******/
router.get('/', (req, res) => {
  db.Activity.findAll()
    .then((activity) => {
      res.json(activity);
    });
});

router.get('/weight', (req, res) => {
  db.Weight.findAll()
    .then((weight) => {
      console.log(weight);
      res.json(weight);
      res.sendFile(path.join(__dirname, '../public', 'index.html'));
    });
});

//* *******  MEALS *****/
router.get('/meal', (req, res) => {
  db.Activity.findAll()
    .then((activity) => {
      res.json(activity);
    });
});
router.post('/meal', (req, res) => {
  const activity = req.body;
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
// DELETE deletes an activity by id
router.delete('/meal/:id', (req, res) => {
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
router.put('/meal/:id', (req, res) => {
  res.send('updates an activity by id');
});
// GET individual activity by id
router.get('/meal/:id', (req, res) => {
  res.send('gets individual activity');
});
module.exports = router;
