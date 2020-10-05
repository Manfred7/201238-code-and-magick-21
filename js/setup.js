'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARD_FIREBALL_COLOR = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const WIZARDS_COUNT = 4;
const ESC_CODE = 27;
const ENTER_CODE = 13;


const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * (array.length))];
};

const getWizardName = function () {
  return `${getRandomArrayElement(WIZARD_NAMES)}  ${getRandomArrayElement(WIZARD_LASTNAMES)}`;
};

const generateWizard = function () {
  let wizard = {
    name: getWizardName(),
    coatColor: getRandomArrayElement(WIZARD_COAT_COLOR),
    eyesColor: getRandomArrayElement(WIZARD_EYES_COLOR),
  };
  return wizard;
};

const createWizards = function () {
  const tmpWizards = [];
  for (let i = 0; i < WIZARDS_COUNT; i++) {
    tmpWizards.push(generateWizard());
  }
  return tmpWizards;
};

const wizards = createWizards();

const renderWizard = function (wizard) {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;

  return wizardElement;
};

const makeFragment = function () {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

const userDialog = document.querySelector(`.setup`);
const similarListElement = userDialog.querySelector(`.setup-similar-list`);

similarListElement.appendChild(makeFragment());
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);

const setupOpen = document.querySelector(`.setup-open`);
const setup = document.querySelector(`.setup`);
const setupClose = setup.querySelector(`.setup-close`);
const setupUserName = setup.querySelector(`.setup-user-name`);

const onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_CODE) {
    if (evt.target !== setupUserName) {
      evt.preventDefault();
      closePopup();
    }
  }
};

const openPopup = function () {
  setup.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

const closePopup = function () {
  setup.classList.add(`hidden`);
  document.removeEventListener(`keydown`, onPopupEscPress);
};

setupOpen.addEventListener(`click`, function () {
  openPopup();
});

setupOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === ENTER_CODE) {
    openPopup();
  }
});

setupClose.addEventListener(`click`, function () {
  closePopup();
});

setupClose.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    closePopup();
  }
});

const setupWizardAppearance = document.querySelector(`.setup-wizard-appearance`);
const inputCoatColor = setupWizardAppearance.querySelector(`input[name="coat-color"]`);
const setupWizard = document.querySelector(`.setup-wizard`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);

wizardCoat.addEventListener(`click`, function () {
  const color = getRandomArrayElement(WIZARD_COAT_COLOR);
  wizardCoat.style.fill = color;
  inputCoatColor.value = color;
});

const wizardeEyes = setupWizard.querySelector(`.wizard-eyes`);
const inputEyesColor = setupWizardAppearance.querySelector(`input[name="eyes-color"]`);

wizardeEyes.addEventListener(`click`, function () {
  const color = getRandomArrayElement(WIZARD_EYES_COLOR);
  wizardeEyes.style.fill = color;
  inputEyesColor.value = color;
});

const fireballWrap = document.querySelector(`.setup-fireball-wrap`);
const inputFireballColor = fireballWrap.querySelector(`input[name="fireball-color"]`);

fireballWrap.addEventListener(`click`, function () {
  const color = getRandomArrayElement(WIZARD_FIREBALL_COLOR);
  fireballWrap.style.background = color;
  inputFireballColor.value = color;
});

