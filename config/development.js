'use strict';

module.exports = {
  ...require('./default'),
  mongodb: {
    uri: process.env.MONGODB || 'mongodb://admin:admin123@127.0.0.1:27017/performance',
    debug: true,
  },
  redis: {
    port : 6379,
    host : 'localhost',
    password: ''
  }
};