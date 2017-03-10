/* eslint-disable import/no-extraneous-dependencies */
const tape = require('tape');
const sinon = require('sinon');
const utils = require('../utilities');

const corsModule = require('../../middleware/cors');

tape.test('middleware/cors', (test) => {
  test.test('initialization', (initTest) => {
    const app = {
      use: sinon.spy()
    };

    corsModule(app);
    initTest.ok(app.use.calledOnce, 'app.use is called once');
    initTest.equal(typeof app.use.args[0][0], 'function', 'called with a function');
    initTest.end();
  });

  test.test('adds headers to a response', (headersTest) => {
    const app = {
      use: sinon.spy()
    };

    corsModule(app);
    const handler = app.use.args[0][0];

    const setsHeaders = (req, res, setsHeadersTest) => {
      setsHeadersTest.ok(req.get.calledOnce, 'request header is retrieved once');
      setsHeadersTest.ok(req.get.calledWith('origin'), 'gets the ORIGIN request header');
      setsHeadersTest.equal(res.header.callCount, 3, 'three headers were set');
      setsHeadersTest.ok(res.header.calledWith('Access-Control-Allow-Origin', utils.requestOrigin), 'Access-Control-Allow-Origin header is set to request origin');
      setsHeadersTest.ok(res.header.calledWith('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS'), 'Access-Control-Allow-Methods header is set to the allowed methods');
      setsHeadersTest.ok(res.header.calledWith('Access-Control-Allow-Headers', 'Accepts, Authorization, Content-Length, Content-Type'), 'Access-Control-Allow-Headers header is set to the allowed headers');
    };

    headersTest.test('where the method is not OPTIONS', (notOptionsRequestTest) => {
      const mocks = utils.getMockHandlerArguments();
      handler(mocks.req, mocks.res, mocks.next);
      setsHeaders(mocks.req, mocks.res, notOptionsRequestTest);
      notOptionsRequestTest.ok(mocks.next.calledOnce, 'next is called');
      notOptionsRequestTest.end();
    });

    headersTest.test('where the method is OPTIONS', (optionsRequestTest) => {
      const mocks = utils.getMockHandlerArguments();
      mocks.req.method = 'OPTIONS';
      handler(mocks.req, mocks.res, mocks.next);
      setsHeaders(mocks.req, mocks.res, optionsRequestTest);
      optionsRequestTest.ok(mocks.res.sendStatus.calledOnce, 'HTTP response status is set once');
      optionsRequestTest.ok(mocks.res.sendStatus.calledWith(200), 'HTTP status code 200 is sent');
      optionsRequestTest.ok(mocks.next.notCalled, 'next is not called');
      optionsRequestTest.end();
    });

    headersTest.end();
  });

  test.end();
});
