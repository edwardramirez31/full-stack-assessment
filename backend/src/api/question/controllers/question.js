'use strict';

/**
 *  question controller
 */
const axios = require('axios');

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::question.question', () => ({
  async fetchSampleData(ctx) {
    const response = await axios.get('https://v2.jokeapi.dev/joke/Any?type=twopart');

    const { setup, delivery } = response.data;
    ctx.request.body = {data: {title: setup, text: delivery}}

    const data =  await strapi.controller('api::question.question').create(ctx);
    return data;
  },
}));
