import RestaurantAPI from '../../data/restaurant_api';
import UrlParser from '../../routes/url_parser';
import { createRestaurantDetailTemplate } from '../templates/template_creator';

const RestaurantDetail = {
  async render() {
    return `
    <h2 class="restaurant-title">Detail Restoran</h2>
    <div id="restaurant-detail">
    </div>
    <div id="like-btn"></div>
    `;
  },
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantAPI.get(url.id);
    document.querySelector('#restaurant-detail').innerHTML +=
      createRestaurantDetailTemplate(restaurant);
  },
};

export default RestaurantDetail;
