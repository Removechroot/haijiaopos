/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1612074483894_4312';

  // add your middleware config here
  config.middleware = [];

  config.mysql = {
    // 单数据库信息配置
    client: {
      // host
      host: '192.168.199.109',
      // 端口号
      port: '3306',
      // 用户名
      user: 'haijiao_pos',
      // 密码
      password: '3pNNGWkJ8Pr8hZGz',
      // 数据库名
      database: 'haijiao_pos',
    },
    
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',

};

config.security = {
    // 关闭csrf验证
    csrf: {
        enable: false,
    },
    // 白名单
    domainWhiteList: ['*']
};


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',

  };

  return {
    ...config,
    ...userConfig,
  };
};
