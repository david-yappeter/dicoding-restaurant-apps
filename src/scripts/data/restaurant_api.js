import API_ENDPOINT from '../globals/api_endpoint';

class RestaurantAPI {
  static async fetch() {
    const response = await fetch(API_ENDPOINT.fetch);
    const responseJson = await response.json();
    return responseJson;
  }

  static async get(id) {
    const response = await fetch(API_ENDPOINT.get(id));
    const responseJson = await response.json();
    return responseJson;
  }

  static async addReview({ id, name, review }) {
    const response = await fetch(API_ENDPOINT.review, {
      method: 'POST',
      body: JSON.stringify({
        id,
        name,
        review,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default RestaurantAPI;
