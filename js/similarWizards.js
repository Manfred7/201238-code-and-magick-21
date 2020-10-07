'use strict';
(function () {

  const WIZARDS_COUNT = 4;

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const getWizardName = function () {
    return `${window.utils.getRandomArrayElement(window.wizardConsts.WIZARD_NAMES)}  ${window.utils.getRandomArrayElement(window.wizardConsts.WIZARD_LASTNAMES)}`;
  };

  const generateWizard = function () {
    const wizard = {
      name: getWizardName(),
      coatColor: window.utils.getRandomArrayElement(window.wizardConsts.WIZARD_COAT_COLOR),
      eyesColor: window.utils.getRandomArrayElement(window.wizardConsts.WIZARD_EYES_COLOR),
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

  window.similarWizards = {
    show(userDialog) {
      userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
      const similarListElement = userDialog.querySelector(`.setup-similar-list`);
      similarListElement.appendChild(makeFragment());
    }

  };


})();
