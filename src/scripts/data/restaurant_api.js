import API_ENDPOINT from '../globals/api_endpoint';

class RestaurantAPI {
  static async fetch() {
    const response = await fetch(API_ENDPOINT.fetch);
    const responseJson = await response.json();
    return responseJson;
  }

  // static async get(id) {
  //   const response = await fetch(API_ENDPOINT.get);
  //   const responseJson = await response.json();
  //   return responseJson.results();
  // }
}

export default RestaurantAPI;
