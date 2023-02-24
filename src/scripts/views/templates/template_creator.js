import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
<div class="card">
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
</div>
`;

export { createRestaurantListTemplate };
