/* eslint-disable import/no-extraneous-dependencies */
const tape = require('tape');
const sinon = require('sinon');

const compositeModule = require('../../routes/index');

tape.test('routes/index', (test) => {
  test.test('initialization', (initTest) => {
    const app = {
      get: sinon.spy(),
      post: sinon.spy()
    };

    compositeModule(app);
    initTest.equal(app.get.callCount, 1, 'app.get is called one time');
    initTest.equal(typeof app.get.args[0][0], 'string', 'called with a route string the first time');
    initTest.equal(typeof app.get.args[0][1], 'function', 'called with a function the first time');
    initTest.equal(app.post.callCount, 1, 'app.post is called one time');
    initTest.equal(typeof app.post.args[0][0], 'string', 'called with a route string the first time');
    initTest.equal(typeof app.post.args[0][1], 'function', 'called with a function the first time');
    initTest.end();
  });

  test.end();
});
