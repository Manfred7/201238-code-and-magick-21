'use strict';

(function () {
  window.utils = {
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
