const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants');

require('dotenv').config();

module.exports = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  const isProd = phase === PHASE_PRODUCTION_BUILD;

  let env = {};

  if (isDev) {
    env = {
      API_URL: process.env.API_URL,
    };
  }

  if (isProd) {
    env = {
      API_URL: process.env.API_URL,
    };
  }

  return {
    env,
  };
};
