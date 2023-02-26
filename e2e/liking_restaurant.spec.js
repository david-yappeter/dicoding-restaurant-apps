const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favourite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#content');
  I.see(
    'Kamu belum menambahkan restoran favoritmu',
    '.restaurant-item__not__found'
  );
});

Scenario('liking one restaurant', async ({ I }) => {
  const timeout = 1;
  I.amOnPage('/');

  I.waitForElement('.restaurant-container .restaurant-name', timeout);
  I.seeElement('.restaurant-container .restaurant-name');

  const firstRestaurant = locate(
    '.restaurant-container .restaurant-name'
  ).first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#like-btn', timeout);
  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-container.card');

  const likedRestaurantTitle = await I.grabTextFrom(
    '.restaurant-container .restaurant-name'
  );
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});
