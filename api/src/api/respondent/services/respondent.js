'use strict';

/**
 * respondent service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::respondent.respondent');
