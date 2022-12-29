'use strict';

/**
 * dado service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dado.dado');
