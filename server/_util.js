function getAverageRatings(reviews) {
  let generalCount = 0;
  let items = {};
  let itemsCounts = {};
  let aspects = Object.keys(reviews[0].ratings.aspects);
  reviews.forEach((review) => {
    let weight = getReviewWeight(review);
    generalCount += review.ratings.general.general * weight;
    aspects.forEach((a) => {
      items[a] = items[a] || 0;
      if (review.ratings.aspects[a]) {
        items[a] += review.ratings.aspects[a] * weight;
        itemsCounts[a] = itemsCounts[a] || 0;
        itemsCounts[a]++;
      }
    });
  });
  let generalAvg = (generalCount / reviews.length).toFixed(1);
  Object.keys(itemsCounts).map((item) => {
    itemsCounts[item] = (items[item] / itemsCounts[item]).toFixed(1);
  });
  return { generalAvg, aspecsAvg: itemsCounts };
}

function getAverageTravelledWith(reviews) {
  let categories = {};
  let categoriesCount = {};
  reviews.forEach((item) => {
    let category = item.traveledWith;
    categoriesCount[category] = categoriesCount[category] || 0;
    categoriesCount[category]++;
  });
  Object.keys(categoriesCount).forEach((item) => {
    categories[item] = (categoriesCount[item] * 100) / reviews.length;
  });

  return categories;
}

/**
 * Calculate a weight for averaging the reviews.
 * @param {object} review review object from JSON API.
 * @returns {number} weight from 0.5 - 1.
 */
function getReviewWeight(review) {
  const entryYear = new Date(review.entryDate).getFullYear();
  const currentYear = new Date().getFullYear();

  if (currentYear - entryYear > 5) {
    return 0.5;
  } else {
    return 1 - (currentYear - entryYear) * 0.1;
  }
}

module.exports = {
  getAverageRatings,
  getAverageTravelledWith,
};
