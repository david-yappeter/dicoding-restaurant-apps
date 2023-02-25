import FavouriteRestaurantIdb from '../data/favorite_restaurant_idb';
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template_creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    const isExist = await this._isRestaurantExist(id);
    if (isExist) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurantIdb.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.put(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await FavouriteRestaurantIdb.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
