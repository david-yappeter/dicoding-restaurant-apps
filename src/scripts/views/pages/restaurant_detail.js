import RestaurantAPI from '../../data/restaurant_api';
import UrlParser from '../../routes/url_parser';
import LikeButtonInitiator from '../../utils/like_button_initiator';
import { createRestaurantDetailTemplate } from '../templates/template_creator';

const RestaurantDetail = {
  async render() {
    return `
    <h2 class="text-center restaurant-title">Detail Restoran</h2>
    <div id="restaurant-detail-container">
    </div>
    <div id="like-btn"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantAPI.get(url.id);
    document.querySelector('#restaurant-detail-container').innerHTML +=
      createRestaurantDetailTemplate(restaurant);

    const likeButtonContainer = document.querySelector('#like-btn');
    LikeButtonInitiator.init({
      likeButtonContainer: likeButtonContainer,
      restaurant: {
        ...restaurant,
      },
    });
  },
};

export default RestaurantDetail;
