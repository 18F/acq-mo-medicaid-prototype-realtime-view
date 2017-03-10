const sinon = require('sinon'); // eslint-disable-line import/no-extraneous-dependencies

module.exports.requestOrigin = 'request origin';

module.exports.getMockHandlerArguments = () => {
  const statusSend = {
    send: sinon.spy()
  };

  return {
    req: {
      get: sinon.stub().returns(module.exports.requestOrigin),
      method: '',
      headers: { }
    },
    res: {
      header: sinon.spy(),
      sendStatus: sinon.spy(),
      status: sinon.stub().returns(statusSend),
      statusSend
    },
    next: sinon.spy()
  };
};
