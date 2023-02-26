import FavouriteRestaurantIdb from '../src/scripts/data/favorite_restaurant_idb';
import * as TestFactories from './helpers/testFactories';

describe('Like a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-btn-container"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavouriteRestaurantIdb.put({ id: 1 });
  });

  afterEach(async () => {
    await FavouriteRestaurantIdb.delete(1);
  });

  it('should show the unlike button when restaurant has been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show like button when the restaurant has been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAll()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavouriteRestaurantIdb.delete(1);
    document.querySelector('#like-btn').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAll()).toEqual([]);
  });
});
