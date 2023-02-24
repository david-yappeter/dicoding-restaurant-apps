const CONFIG = {
  KEY: 'YOUR_API_KEY',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: (id) =>
    `https://restaurant-api.dicoding.dev/images/small/${id}`,
  BASE_IMAGE_URL_MEDIUM: (id) =>
    `https://restaurant-api.dicoding.dev/images/medium/${id}`,
  BASE_IMAGE_URL_LARGE: (id) =>
    `https://restaurant-api.dicoding.dev/images/large/${id}`,
};

export default CONFIG;
