'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_LASTNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const WIZARD_COAT_COLOR = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const WIZARD_EYES_COLOR = [`black`, `red`, `blue`, `yellow`, `green`];
const WIZARDS_COUNT = 4;
const userDialog = document.querySelector(`.setup`);
userDialog.classList.remove(`hidden`);

const similarListElement = userDialog.querySelector(`.setup-similar-list`);

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

similarListElement.appendChild(makeFragment());
userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
