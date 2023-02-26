import { itActsAsFavouriteRestaurantModel } from './contract/favouriteRestaurantContract';
import FavouriteRestaurantIdb from '../src/scripts/data/favorite_restaurant_idb';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavouriteRestaurantIdb.getAll()).forEach(async (restaurant) => {
      await FavouriteRestaurantIdb.delete(restaurant.id);
    });
  });

  itActsAsFavouriteRestaurantModel(FavouriteRestaurantIdb);
});
