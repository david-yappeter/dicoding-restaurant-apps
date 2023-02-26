const CONFIG = require('./config');

const API_ENDPOINT = {
  fetch: `${CONFIG.BASE_URL}list`,
  get: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  review: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
