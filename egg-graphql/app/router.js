'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // restful  概念 暴露资源
  router.resources('users','/users', controller.users);
  
};
