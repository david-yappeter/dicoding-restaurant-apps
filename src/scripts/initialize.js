import App from './views/app';

const Initialize = () => {
  const app = new App({
    button: document.querySelector('#navbar-toggler'),
    drawer: document.querySelector(
      document.querySelector('#navbar-toggler').getAttribute('data-target')
    ),
    content: document.querySelector('#nav-list'),
  });
};

export default {
  Initialize,
};
