import RestaurantAPI from '../../data/restaurant_api';
import { createRestaurantListTemplate } from '../templates/template_creator';

const RestaurantList = {
  async render() {
    return `
    <div id="landing-container">
      <h1 tabindex="0">Welcome to Wello</h1>
      <a href="#find" class="btn">Take A Tour</a>
    </div>
    <h1 tabindex="0" id="find" class="title">Find Nearby Restaurants</h1>
    <section class="restaurants"></section>
    `;
  },

  async afterRender() {
    const response = await RestaurantAPI.fetch();
    const { restaurants } = response;

    restaurants.forEach((restaurant) => {
      document.querySelector('section.restaurants').innerHTML +=
        createRestaurantListTemplate(restaurant);
    });
  },
};

export default RestaurantList;
