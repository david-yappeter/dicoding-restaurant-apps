const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (e) => {
      this._toggleDrawer(e, drawer);
    });

    content.addEventListener('click', (e) => {
      this._closeDrawer(e, drawer);
    });
  },

  _toggleDrawer(e, drawer) {
    e.stopPropagation();
    drawer.classList.toggle('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('active');
  },
};

export default DrawerInitiator;
