'use strict';

/**
 * slider-user-answer router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::slider-user-answer.slider-user-answer');
module.exports = createCoreRouter('api::slider-user-answer.slider-user-answer', {
    prefix: '',
    only: ['find', 'findOne', 'create', 'update'],
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
