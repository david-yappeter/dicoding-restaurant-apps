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

const createBadge = (text, className) => {
  return `
    <li class="badge ${className}">
      <p>${text}</p>
    </li>
  `;
};

const createReview = (review) => {
  return `
    <li class="card review-box">
      <p>${review.date}</p>
      <div class="flex justify-start align-center">
      <img class="profile-pic" alt="${review.name}" src="/images/anon.webp" />
        <p class="font-bold ml-10px">${review.name}</p>
      </div>
      <p>${review.review}</p>
    </li>
  `;
};

const createRestaurantDetailTemplate = (restaurant) => `
<div id="restaurant-detail" class="card">
  <img class="restaurant-detail-img" src="${CONFIG.BASE_IMAGE_URL_MEDIUM(
    restaurant.pictureId
  )}" alt="${restaurant.name}" />
  <div class="restaurant-rate">
    <i class="fa-solid fa-star"></i>
    <span>${restaurant.rating}</span>
  </div>
  <div class="restaurant-rate">
    <i class="fa-solid fa-map-pin"></i>
    <span>${restaurant.address}</span>
  </div>
  <h2 class="restaurant-name">${restaurant.name}</h2>
  <p class="restaurant-description">${restaurant.description}</p>
  <div class="restaurant-categories">
    <h4>Kategori</h4>
    <ul class="restaurant-list">
    ${restaurant.categories
      .map((category) => createBadge(category.name, 'bg-primary'))
      .join('')}
    </ul>
  </div>
  <div class="restaurant-menus">
    <h4>Menu Makanan</h4>
    <ul class="restaurant-list">
    ${restaurant.menus.foods
      .map((menu) => createBadge(menu.name, 'bg-secondary'))
      .join('')}
    </ul>
    </div>
    <div class="restaurant-menus">
    <h4>Menu Minuman</h4>
    <ul class="restaurant-list">
    ${restaurant.menus.drinks
      .map((menu) => createBadge(menu.name, 'bg-red'))
      .join('')}
    </ul>
  </div>
  <article id="restaurant-reviews">
    <h2>Review</h2>
    <ul>
    ${restaurant.customerReviews.map((review) => createReview(review)).join('')}
    <ul>
  </article>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
