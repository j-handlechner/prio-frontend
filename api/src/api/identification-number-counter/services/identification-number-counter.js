'use strict';

/**
 * identification-number-counter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::identification-number-counter.identification-number-counter');
