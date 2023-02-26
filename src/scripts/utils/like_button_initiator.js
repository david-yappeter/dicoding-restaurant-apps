import {
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
} from '../views/templates/template_creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant, favouriteRestaurantIdb }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;
    this._favouriteRestaurantIdb = favouriteRestaurantIdb;

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
    const restaurant = await this._favouriteRestaurantIdb.get(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestaurantIdb.put(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeButtonTemplate();

    const likeButton = document.querySelector('#like-btn');
    likeButton.addEventListener('click', async () => {
      await this._favouriteRestaurantIdb.delete(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
