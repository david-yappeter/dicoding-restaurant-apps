import FavouriteRestaurant from '../views/pages/favourite_restaurant';
import RestaurantDetail from '../views/pages/restaurant_detail';
import RestaurantList from '../views/pages/restaurant_list';

const routes = {
  '/': RestaurantList, // default page
  '/favourite': FavouriteRestaurant,
  '/detail/:id': RestaurantDetail,
};

export default routes;
