import FavouriteRestaurantIdb from '../../data/favorite_restaurant_idb';
import {
  createRestaurantListTemplate,
  loading,
} from '../templates/template_creator';

const FavouriteRestaurant = {
  async render() {
    return `
    <h1 tabindex="0" id="find" class="title">Liked Restaurant</h1>
    <section class="restaurants">
      ${loading.show()}
    </section>
    <div class="mx-10px flex justify-center items-center flex-col">
      <h2 class="text-center">Kamu belum menambahkan restoran favoritmu</h2>
      <img class="no-data-img" alt="no data" src="/images/no-data.webp" />
      <a href="#/" class="btn bg-primary">Kembali ke beranda</a>
    </div>
    `;
  },

  async afterRender() {
    loading.hide();
    const restaurants = await FavouriteRestaurantIdb.getAll();
    const restaurantContainer = document.querySelector('section.restaurants');

    if (restaurants.length > 0) {
      restaurantContainer.nextElementSibling.innerHTML = '';
    }
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default FavouriteRestaurant;
