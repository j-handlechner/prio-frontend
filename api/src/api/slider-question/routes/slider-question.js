'use strict';

/**
 * slider-question router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::slider-question.slider-question');
module.exports = createCoreRouter('api::slider-question.slider-question', {
    prefix: '',
    only: ['find', 'findOne', 'create'],
    except: [],
    config: {
      find: {
        auth: false,
        policies: [],
        middlewares: [],
      },
      findOne: {},
      create: {},
      update: {},
      delete: {},
    },
});
