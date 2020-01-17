const router = require('express').Router();
const axios = require('axios');
const db = require('../models');
// Activities
// GET index, get all activity
router.get('/activity', (req, res) => {
    db.Activity.findAll()
        .then((activity) => {
            c;

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

router.get('/weight', (req, res) => {
    db.Activity.findAll()
        .then((weight) => {
            console.log('weight', weight);

            // res.json(activity);
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


router.post('/mealsss', (req, res) => {
    const nutriQ = 'https://trackapi.nutritionix.com/v2/natural/nutrients';

    axios({

            url: nutriQ,
            method: 'POST',

            headers: {
                'Content-Type': 'application/json,',
                'x-app-id': '145e3180',
                'x-app-key': '1a1f6f68bf0b4aaebf563a6251c3bba5',

            },
            data: {
                query: req.body.query,
                timezone: 'US/Eastern',
            },


        })
        .then((response) => {
            console.log(response.data);

            res.json(response.data);
        }).catch((err) => {
            console.log(err.message);
            res.send(404);
        });
});

module.exports = router;