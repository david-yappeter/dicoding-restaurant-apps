import FavouriteRestaurantIdb from '../../data/favorite_restaurant_idb';
import RestaurantAPI from '../../data/restaurant_api';
import UrlParser from '../../routes/url_parser';
import LikeButtonInitiator from '../../utils/like_button_initiator';
import {
  createRestaurantDetailTemplate,
  loading,
} from '../templates/template_creator';

const RestaurantDetail = {
  async render() {
    return `
    <h2 class="text-center restaurant-title">Detail Restoran</h2>
    <div id="restaurant-detail-container">
      ${loading.show()}
    </div>
    <div id="like-btn-container"></div>
    `;
  },
  async afterRender() {
    loading.hide();
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantAPI.get(url.id);
    document.querySelector('#restaurant-detail-container').innerHTML +=
      createRestaurantDetailTemplate(restaurant);

    document
      .querySelector('#add-review-form')
      .addEventListener('submit', (e) => {
        e.preventDefault();

        const values = [...new FormData(e.target).entries()].reduce(
          (prev, val) => {
            prev[val[0]] = val[1];
            return prev;
          },
          {}
        );
        document.querySelector('#add-review-form').reset();

        RestaurantAPI.addReview({
          id: restaurant.id,
          ...values,
        });
      });

    const likeButtonContainer = document.querySelector('#like-btn-container');
    LikeButtonInitiator.init({
      likeButtonContainer: likeButtonContainer,
      restaurant: {
        ...restaurant,
      },
      favouriteRestaurantIdb: FavouriteRestaurantIdb,
    });
  },
};

export default RestaurantDetail;
