import CONFIG from './config';

const API_ENDPOINT = {
  fetch: `${CONFIG.BASE_URL}list`,
  get: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINT;
