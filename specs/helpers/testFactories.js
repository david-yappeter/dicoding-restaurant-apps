import LikeButtonInitiator from '../../src/scripts/utils/like_button_initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#like-btn'),
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
