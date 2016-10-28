var googleTrends = require('google-trends-api');

googleTrends.trendData('Oj Simpson')
  .then(function(results){
    console.log(results);
  })
  .catch(function(err){
    console.error(err);
  });

