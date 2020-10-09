'use strict';
(function () {
  const setupWizardAppearance = document.querySelector(`.setup-wizard-appearance`);
  const inputCoatColor = setupWizardAppearance.querySelector(`input[name="coat-color"]`);
  const setupWizard = document.querySelector(`.setup-wizard`);
  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);

  const getRandomColor = function (collors) {
    return window.utils.getRandomArrayElement(collors);
  };

  wizardCoat.addEventListener(`click`, function () {
    const color = getRandomColor(window.wizardConsts.WIZARD_COAT_COLOR);
    wizardCoat.style.fill = color;
    inputCoatColor.value = color;
  });

  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const inputEyesColor = setupWizardAppearance.querySelector(`input[name="eyes-color"]`);

  wizardEyes.addEventListener(`click`, function () {
    const color = getRandomColor(window.wizardConsts.WIZARD_EYES_COLOR);
    wizardEyes.style.fill = color;
    inputEyesColor.value = color;
  });

  const fireballWrap = document.querySelector(`.setup-fireball-wrap`);
  const inputFireballColor = fireballWrap.querySelector(`input[name="fireball-color"]`);

  fireballWrap.addEventListener(`click`, function () {
    const color = getRandomColor(window.wizardConsts.WIZARD_FIREBALL_COLOR);
    fireballWrap.style.background = color;
    inputFireballColor.value = color;
  });

})();
