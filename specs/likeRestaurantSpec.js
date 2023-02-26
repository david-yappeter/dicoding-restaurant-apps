import FavouriteRestaurantIdb from '../src/scripts/data/favorite_restaurant_idb';
import * as TestFactories from './helpers/testFactories';

describe('Like a restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="like-btn-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like this restaurant"]')
    ).toBeTruthy();
  });

  it('should not show unlike button when the restaurant hasnot been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike this restaurant"]')
    ).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));

    const restaurant = await FavouriteRestaurantIdb.get(1);

    expect(restaurant).toEqual({ id: 1 });
    FavouriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavouriteRestaurantIdb.put({ id: 1 });

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));

    expect(await FavouriteRestaurantIdb.getAll()).toEqual([{ id: 1 }]);
    FavouriteRestaurantIdb.delete(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#like-btn').dispatchEvent(new Event('click'));
    expect(await FavouriteRestaurantIdb.getAll()).toEqual([]);
  });
});
