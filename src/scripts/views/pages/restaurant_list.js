import RestaurantAPI from '../../data/restaurant_api';
import CONFIG from '../../globals/config';

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
      const card = document.createElement('div');
      card.classList.add('card');

      card.innerHTML = `
    <picture>
      <img
        class="card-image"
        alt="${restaurant.name}"
        src="${CONFIG.BASE_IMAGE_URL_SMALL(restaurant.pictureId)}" />
    </picture>

    <div class="caption">
      <div class="rate">
        <i class="fa-solid fa-star"></i>
        <span>${restaurant.rating}</span>
        </div>
        <p>${restaurant.city}</p>
      <h1 class="card-title">
        <a class="restaurant-name" href="#">${restaurant.name}</a>
      </h1>
      <p class="card-desc">
        ${restaurant.description}
      </p>
    </div>
    `;

      document.querySelector('section.restaurants').appendChild(card);
    });
  },
};

export default RestaurantList;
