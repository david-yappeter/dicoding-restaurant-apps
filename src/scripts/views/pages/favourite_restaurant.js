import FavouriteRestaurantIdb from '../../data/favorite_restaurant_idb';
import { createRestaurantListTemplate } from '../templates/template_creator';

const FavouriteRestaurant = {
  async render() {
    return `
    <h1 tabindex="0" id="find" class="title">Liked Restaurant</h1>
    <section class="restaurants">
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavouriteRestaurantIdb.getAll();
    const restaurantContainer = document.querySelector('section.restaurants');

    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default FavouriteRestaurant;
