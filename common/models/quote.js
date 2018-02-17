'use strict';

module.exports = function(Quote) {
  Quote.like = function(timestamp, cb) {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var OPEN_HOUR = 6;
    var CLOSE_HOUR = 20;
    var response;
    if (currentHour >= OPEN_HOUR && currentHour < CLOSE_HOUR) {
      response = 'We are open for business.';
    } else {
      response = 'Sorry, we are closed. Open daily from 6am to 8pm.';
    }
		cb(null, response);
  };
  Quote.remoteMethod('like', {
    description: 'Increment a model instance like count in the data source.',
    accessType: 'READ',
    accepts: [
      {arg: 'id', type: 'any', description: 'Model id', required: true},
    ],
    http: {
      path: '/:id/like',
      verb: 'get',
    },
    returns: {
      arg: 'like_count',
      type: 'string',
    },
  });
};
