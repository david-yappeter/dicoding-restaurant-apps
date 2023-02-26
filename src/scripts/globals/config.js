const CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: (id) =>
    `https://restaurant-api.dicoding.dev/images/small/${id}`,
  BASE_IMAGE_URL_MEDIUM: (id) =>
    `https://restaurant-api.dicoding.dev/images/medium/${id}`,
  BASE_IMAGE_URL_LARGE: (id) =>
    `https://restaurant-api.dicoding.dev/images/large/${id}`,
  // CACHE_NAME: new Date().toISOString(),
  CACHE_NAME: 'restaurant-app-cache-key',
  DATABASE_NAME: 'restaurant-catalogue-db',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurant',
};

module.exports = CONFIG;
