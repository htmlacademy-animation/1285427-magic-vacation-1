export default () => {
  window.addEventListener(`DOMContentLoaded`, () => {
    // Заголовок на главной странице, он двухъярусный, от этого с ним больше мороки
    (() => {
      const title = document.querySelector(`.intro__title`);
      const titleText = title.innerText.trim();
      const titlePartArray = titleText.replace(/\s/g, `|`).split(`|`);
      title.innerHTML = `<span>${titlePartArray.join(`</span> <span>`)}</span>`;
      const [titleFirstPart, titleSecondPart] = title.querySelectorAll(`span`);
      const mapDelayFirstPart = [200, 100, 0, 100, 150, 100, 0, 300, 150, 0, 150, 0]
        .map((item) => {
          return item + 600; // отложенный старт
        });
      waveLetter(titleFirstPart, mapDelayFirstPart);
      const mapDelaySecondPart = [200, 250, 150, 0, 200, 50].map((item) => {
        return item + 850; // отложенный старт
      });
      waveLetter(titleSecondPart, mapDelaySecondPart);
    })();

    // Дата на главной странице
    (() => {
      const date = document.querySelector(`.intro__date`);
      const mapDelayDate = [150, 100, 0, 0, 0, 200, 50, 100, 100, 250, 0, 50, 0, 0, 200, 150, 50]
        .map((item) => {
          return item + 1650; // отложенный старт
        });
      waveLetter(date, mapDelayDate);
    })();

    // Дата на главной странице
    (() => {
      const storyTitle = document.querySelector(`.slider__item-title`);
      const mapDelayDate = [200, 100, 0, 100, 150, 100, 0];
      waveLetter(storyTitle, mapDelayDate);
    })();

    (() => {
      const prizesTitle = document.querySelector(`.prizes__title`);
      const mapPrizesDate = [200, 100, 0, 100, 150];
      waveLetter(prizesTitle, mapPrizesDate);
    })();

    (() => {
      const rulesTitle = document.querySelector(`.rules__title`);
      const mapRulesDate = [250, 100, 50, 0, 150, 100, 0];
      waveLetter(rulesTitle, mapRulesDate);
    })();

    (() => {
      const gameTitle = document.querySelector(`.game__title`);
      const mapGameDate = [300, 150, 0, 100];
      waveLetter(gameTitle, mapGameDate);
    })();
  });

  function waveLetter(element, map) {
    const text = element.innerText.trim();
    const arrLetter = text.split(``);
    const prepareArrLetter = arrLetter.map((letter, index) => {
      if (/\s/.test(letter)) {
        return letter;
      }
      const delay = `${map[index]}ms`;
      const style = `style="transition-delay: ${delay}"`;
      return `<span class="wave-letter__cell" ${style}>${letter}</span>`;
    });
    const prepareText = prepareArrLetter.join(``);
    element.innerHTML = `<span class="wave-letter__row">${prepareText}</span>`;
  }
};
