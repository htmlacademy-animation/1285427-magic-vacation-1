export default () => {
  window.addEventListener(`load`, () => {
    document
      .querySelector(`body`)
      .classList.add(`body_load`);
  });
};
