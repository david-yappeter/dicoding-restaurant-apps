import swRegister from './utils/sw_register';
import App from './views/app';

const Initialize = () => {
  document.querySelector('.skip-to-content').addEventListener('click', () => {
    document.querySelector('#content').scrollIntoView();
    document.querySelector('#content').focus();
  });

  const app = new App({
    button: document.querySelector('#navbar-toggler'),
    drawer: document.querySelector(
      document.querySelector('#navbar-toggler').getAttribute('data-target')
    ),
    content: document.querySelector('#content'),
  });

  window.addEventListener('hashchange', () => {
    app.renderPage();
  });
  window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
  });
};

export default {
  Initialize,
};
