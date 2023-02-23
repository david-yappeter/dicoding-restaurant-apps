const Initialize = () => {
  document.querySelector('#navbar-toggler').addEventListener('click', () => {
    document
      .querySelector(this.getAttribute('data-target'))
      .classList.toggle('active');
  });
};

module.exports = {
  Initialize,
};
