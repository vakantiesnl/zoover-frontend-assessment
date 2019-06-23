var express = require('express');
var _ = require('underscore');
var reviews = require('../api/reviews.json');
var router = express.Router();

router.get('/', function(req, res, next) {
  let { start = 1, limit, filterBy, sortBy = 'entryDate' } = req.query;

  let data = _.sortBy(reviews, sortBy).reverse(); // reverse to sort desc

  let filtered = data.filter(review =>
    filterBy ? review.traveledWith === filterBy : true
  );

  let paginated = filtered.slice(start - 1, limit);

  res.json({ all: data, filtered: filtered, limited: paginated });
});

router.get('/average', function(req, res, next) {
  let generalCount = 0;
  let items = {};
  let itemsCounts = {};
  let aspects = Object.keys(reviews[0].ratings.aspects);
  reviews.forEach(review => {
    generalCount += review.ratings.general.general;
    aspects.forEach(a => {
      items[a] = items[a] || 0;
      if (review.ratings.aspects[a]) {
        items[a] += review.ratings.aspects[a];
        itemsCounts[a] = itemsCounts[a] || 0;
        itemsCounts[a]++;
      }
    });
  });

  let generalAvg = (generalCount / reviews.length).toFixed(1);
  Object.keys(itemsCounts).map(item => {
    itemsCounts[item] = (items[item] / itemsCounts[item]).toFixed(1);
  });

  res.json({ generalAvg, aspecsAvg: itemsCounts });
});

module.exports = router;
