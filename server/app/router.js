'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/menuall', controller.home.menuall);
  router.get('/vipcard', controller.home.vipcard);
  router.post('/addmenu',controller.home.addmenu)
};
