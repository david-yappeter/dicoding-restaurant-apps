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
      <a class="restaurant-name" href="#/detail/${restaurant.id}">${
  restaurant.name
}</a>
    </h1>
    <p class="card-desc">
      ${restaurant.description}
    </p>
  </div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
<img class="" src="${CONFIG.BASE_IMAGE_URL_MEDIUM}${restaurant.pictureId}" alt="${restaurant.name}" />
<h2 class="restaurant-name">${restaurant.name}</h2>
<h3 class="restaurant-location">${restaurant.address}</h3>
<h3 class="restaurant-start">${restaurant.rating}</h3>
<p class="restaurant-description">${restaurant.description}</p>
<div class="restaurant-categories">
  <h4>Kategori</h4>
  <ul class="restaurant-categories-list">
  </ul>
</div>
<div class="restaurant-menus">
  <h4>Menu Makanan</h4>
  <ul class="restaurant-menus-list">
  </ul>
</div>
<section class="restaurant-review-box">
  <h2>Tambah review</h2>
</section>
<article id="restaurant-reviews">
  <h3>Review</h3>
  <ul>
  <ul>
</article>
`;

export { createRestaurantListTemplate, createRestaurantDetailTemplate };
