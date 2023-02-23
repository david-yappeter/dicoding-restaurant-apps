const { Initialize } = require('./initialize').default;
const datas = require('../public/datas/DATA.json').restaurants;

document.addEventListener('DOMContentLoaded', () => {
  Initialize();

  datas.forEach((data) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <picture>
      <img
        class="card-image"
        alt="${data.name}"
        src="${data.pictureId}" />
    </picture>

    <div class="caption">
      <div class="rate">
        <i class="fa-solid fa-star"></i>
        <span>${data.rating}</span>
        </div>
        <p>${data.city}</p>
      <h1 class="card-title">
        <a class="restaurant-name" href="#">${data.name}</a>
      </h1>
      <p class="card-desc">
        ${data.description}
      </p>
    </div>
    `;

    document.querySelector('section.restaurants').appendChild(card);
  });
});
