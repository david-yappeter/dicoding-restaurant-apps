const Initialize = () => {
  document
    .querySelector('#navbar-toggler')
    .addEventListener('click', function () {
      document
        .querySelector(this.getAttribute('data-target'))
        .classList.toggle('active');
    });
};

module.exports = {
  Initialize,
};
