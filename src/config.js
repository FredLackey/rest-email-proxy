const pkg = require('../package.json');

const DEFAULT_NODE_PORT = 3000;
const DEFAULT_INDENT    = 2;
const DEFAULT_BASE_URL  = '/';

const DEFAULT_SERVER_NAME   = 'smtp.gmail.com';
const DEFAULT_SERVER_PORT   = 25;
const DEFAULT_USER_NAME     = 'me@gmail.com';
const DEFAULT_USER_PASSWORD = 'password';
const DEFAULT_FROM_NAME     = 'REST to Email Proxy';
const DEFAULT_FROM_EMAIL    = 'noreply@nowhere.com';
const DEFAULT_TO_NAME       = 'Joe Blow';
const DEFAULT_TO_EMAIL      = 'joe.blow@nowhere.com';

module.exports = {
  base : process.env.BASE_URL || DEFAULT_BASE_URL,
  desc : pkg.description || pkg.name,
  name : pkg.name,
  port : process.env.NODE_PORT || DEFAULT_NODE_PORT,

  format : {
    indent : process.env.INDENT || DEFAULT_INDENT
  },

  email: {
    server: {
      name  : process.env.SERVER_NAME || DEFAULT_SERVER_NAME,
      port  : process.env.SERVER_PORT || DEFAULT_SERVER_PORT,
    },
    user : {
      name : process.env.USER_NAME || DEFAULT_USER_NAME,
      pass : process.env.USER_PASSWORD || DEFAULT_USER_PASSWORD,
    },
    from : {
      name  : process.env.FROM_NAME || DEFAULT_FROM_NAME,
      email : process.env.FROM_EMAIL || DEFAULT_FROM_EMAIL,
    },
    to : {
      name  : process.env.TO_NAME || DEFAULT_TO_NAME,
      email : process.env.TO_EMAIL || DEFAULT_TO_EMAIL,
    }
  }
}