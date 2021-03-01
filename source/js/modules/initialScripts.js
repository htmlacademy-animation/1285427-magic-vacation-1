export default () => {
  window.addEventListener(`load`, () => {
    setInterval(() => {
      document
        .querySelector(`body`)
        .classList.add(`body_load`);
    }, 1);
  });
};
