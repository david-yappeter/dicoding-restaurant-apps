import RestaurantAPI from '../../data/restaurant_api';
import UrlParser from '../../routes/url_parser';
import {
  createLikeButtonTemplate,
  createRestaurantDetailTemplate,
} from '../templates/template_creator';

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
    const likeButtonContainer = document.querySelector('#like-btn');
    likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantAPI.get(url.id);
    document.querySelector('#restaurant-detail-container').innerHTML +=
      createRestaurantDetailTemplate(restaurant);
  },
};

export default RestaurantDetail;
