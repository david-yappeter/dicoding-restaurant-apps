Feature('Unliking Restaurant');

Before(async ({ I }) => {
  // like a restaurant
  const timeout = 1;
  I.amOnPage('/');

  I.waitForElement('.restaurant-container .restaurant-name', timeout);
  I.seeElement('.restaurant-container .restaurant-name');

  I.click(locate('.restaurant-container .restaurant-name').first());

  I.waitForElement('#like-btn', timeout);
  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/favourite');
  I.seeElement('.restaurant-container.card');

  I.amOnPage('/#/favourite');
});

Scenario('showing a liked restaurant', ({ I }) => {
  I.seeElement('#content');

  I.waitForElement('.restaurant-container .restaurant-name');
  I.seeElement('.restaurant-container .restaurant-name');
});

Scenario('unliking one liked restaurant', async ({ I }) => {
  const timeout = 1;
  I.amOnPage('/#/favourite');

  I.waitForElement('.restaurant-container .restaurant-name', timeout);
  I.seeElement('.restaurant-container .restaurant-name');

  I.click(locate('.restaurant-container .restaurant-name').first());

  I.waitForElement('#like-btn', timeout);
  I.seeElement('#like-btn');
  I.click('#like-btn');

  I.amOnPage('/#/favourite');
  I.seeElement('#content');
  I.see(
    'Kamu belum menambahkan restoran favoritmu',
    '.restaurant-item__not__found'
  );
});
