const express = require('express');
const router = express.Router();
const AddSettings = require('../../models/AddSettings');

// returns all questions in sorted order
router.get('/', (req, res) => {
  // find using mongodb aggregate
  query = AddSettings.aggregate([{ $match: { user: req.body.user } }]);

  query.exec((err, docs) => {
    if (err !== null) {
      return res.json(err);
    } else if (!docs.length) {
      return res.send({ msg: 'nothing found' });
    } else {
      return res.json(docs);
    }
  });
});

module.exports = router;
