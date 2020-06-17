const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

const AddSettings = require('../../models/AddSettings');

router.post(
  '/',
  [check('user', 'user is required').not().isEmpty()],
  async (req, res) => {
    console.log(req.body);
    const error = validationResult(req);

    if (!error.isEmpty()) {
      console.log('ERROR');
      //   console.log(error);
      return res.status('400').json(error.array());
    }

    const { user, fps, resolution, brightness } = req.body;

    res.send({
      user,
      fps,
      resolution,
      brightness,
    });

    userSettings = new AddSettings({
      user,
      fps,
      resolution,
      brightness,
    });

    await userSettings.save();
    // res.send('Data sent');
  }
);

module.exports = router;
