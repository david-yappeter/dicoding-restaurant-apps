import RestaurantAPI from '../../data/restaurant_api';
import { createRestaurantListTemplate } from '../templates/template_creator';

const RestaurantList = {
  async render() {
    return `
    <div id="landing-container">
      <picture class="hero-picture">
        <source media="(max-width: 700px)" type="image/jpeg" data-srcset="./images/heros/hero-image_1-small.jpg" />
        <source media="(min-width: 701px)" type="image/jpeg" data-srcset="./images/heros/hero-image_4-large.jpg" />
        <img class="lazyload hero-image" alt="hero" data-src="./images/heros/hero-image_4.jpg" />
        
      </picture>
      <h1 class="z-10" tabindex="0">Welcome to Wello</h1>
      <a href="#find" class="z-10 btn">Take A Tour</a>
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
