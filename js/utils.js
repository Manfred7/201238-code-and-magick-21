'use strict';

(function () {

  const showError = function (errorMessage) {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = errorMessage;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  window.utils = {
    onError: showError,
    getRandomArrayElement(array) {
      return array[Math.floor(Math.random() * (array.length))];
    },
    getMaxElement(arr) {
      let maxElement = arr[0];

      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
      return maxElement;
    },
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
  };
})();
