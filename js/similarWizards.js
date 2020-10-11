'use strict';
(function () {

  const MAX_WIZARDS_COUNT = 4;

  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const renderWizard = function (wizard) {
    let wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.colorEyes;

    return wizardElement;
  };

  const getWizardsCount = function (wizards) {
    return (wizards.length >= MAX_WIZARDS_COUNT) ? MAX_WIZARDS_COUNT : wizards.length;
  };

  const makeFragment = function (wizards) {
    const fragment = document.createDocumentFragment();
    const WIZARDS_COUNT = getWizardsCount(wizards);
    for (let i = 0; i < WIZARDS_COUNT; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    return fragment;
  };

  const onLoad = function (wizards) {
    const userDialog = document.querySelector(`.setup`);
    const similarListElement = userDialog.querySelector(`.setup-similar-list`);
    const fragment = makeFragment(wizards);
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  window.similarWizards = {
    show() {
      window.backend.load(onLoad, window.utils.onError);
    }
  };


})();
