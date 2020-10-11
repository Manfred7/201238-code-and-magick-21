'use strict';
(function () {
  const setup = document.querySelector(`.setup`);
  const setupOpen = document.querySelector(`.setup-open`);
  const setupClose = setup.querySelector(`.setup-close`);
  const setupUserName = setup.querySelector(`.setup-user-name`);
  const startX = setup.style.left;
  const startY = setup.style.top;

  const onPopupEscPress = function (evt) {
    if (evt.keyCode === window.eventUtils.ESC_CODE) {
      if (evt.target !== setupUserName) {
        evt.preventDefault();
        closePopup();
      }
    }
  };

  const openPopup = function () {
    setup.classList.remove(`hidden`);
    document.addEventListener(`keydown`, onPopupEscPress);

    setup.style.top = startY;
    setup.style.left = startX;

    window.similarWizards.show();
  };

  const closePopup = function () {
    setup.classList.add(`hidden`);
    document.removeEventListener(`keydown`, onPopupEscPress);
  };

  setupOpen.addEventListener(`click`, function () {
    openPopup();
  });

  setupOpen.addEventListener(`keydown`, function (evt) {
    window.eventUtils.isEnterEvent(evt, openPopup);
  });

  setupClose.addEventListener(`click`, function () {
    closePopup();
  });

  setupClose.addEventListener(`keydown`, function (evt) {
    window.eventUtils.isEnterEvent(evt, closePopup);
  });

  const dialogHandle = setup.querySelector(`.upload`);

  dialogHandle.addEventListener(`mousedown`, function (evt) {
    evt.preventDefault();

    let startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    let dragged = false;

    const onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      let shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + `px`;
      setup.style.left = (setup.offsetLeft - shift.x) + `px`;

    };

    const onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener(`mousemove`, onMouseMove);
      document.removeEventListener(`mouseup`, onMouseUp);

      if (dragged) {
        const onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogHandle.removeEventListener(`click`, onClickPreventDefault);
        };
        dialogHandle.addEventListener(`click`, onClickPreventDefault);
      }
    };

    document.addEventListener(`mousemove`, onMouseMove);
    document.addEventListener(`mouseup`, onMouseUp);
  });

})();
