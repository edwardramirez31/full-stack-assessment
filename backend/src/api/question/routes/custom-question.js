'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/fetch-sample-question',
      handler: 'question.fetchSampleData',
    },
  ]
}
