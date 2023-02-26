import FavouriteRestaurantIdb from '../../src/scripts/data/favorite_restaurant_idb';
import LikeButtonInitiator from '../../src/scripts/utils/like_button_initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-btn-container'),
    restaurant,
    favouriteRestaurantIdb: FavouriteRestaurantIdb,
  });
};

export { createLikeButtonPresenterWithRestaurant };
