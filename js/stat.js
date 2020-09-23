'use strict';

const CLOUD_WIDTH = 420;
const CLOUD_HEIGHT = 270;
const CLOUD_X = 100;
const CLOUD_Y = 10;
const GAP = 50;
const SHADOW_OFFSET = 10;
const FONT_GAP = 15;
const BAR_HEIGHT = 150;
const BAR_WIDTH = 40;
const CAPTION_OFFSET_X = 40;
const CAPTION_OFFSET_Y = 22;

let renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

let getMaxElement = function (arr) {
  let maxElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

let getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};
let getRandomBlue = function () {
  return `hsla(240,${getRandomInt(100)}%,  50%, 1)`;
};

let printHeader = function (ctx) {
  ctx.fillStyle = `#000`;
  ctx.font = `16px PT Mono`;
  ctx.textBaseline = `hanging`;
  ctx.fillText(`Ура вы победили!`, CLOUD_X + CAPTION_OFFSET_X, CAPTION_OFFSET_Y);
  ctx.fillText(`Список результатов:`, CLOUD_X + CAPTION_OFFSET_X, CAPTION_OFFSET_Y * 2);
};

let getBarFillStyle = function (player) {
  if (player === `Вы`) {
    return `rgba(255, 0, 0, 1)`;
  }
  return getRandomBlue();
};

let printBottomBarText = function (ctx, player, idx) {
  ctx.fillStyle = `rgb(5, 5, 5)`;
  ctx.fillText(
      player,
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
      CLOUD_HEIGHT - SHADOW_OFFSET - FONT_GAP
  );
};

let printBar = function (ctx, curPlayer, curTime, idx, maxTime) {
  ctx.fillStyle = getBarFillStyle(curPlayer);
  ctx.fillRect(
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
      CLOUD_HEIGHT - FONT_GAP * 2 - (BAR_HEIGHT * curTime) / maxTime,
      BAR_WIDTH,
      (BAR_HEIGHT * curTime) / maxTime
  );
};

let printTimeCaption = function (ctx, curTime, idx, maxTime) {
  ctx.fillStyle = `rgb(5, 5, 5)`;
  ctx.fillText(
      Math.floor(curTime),
      CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
      CLOUD_HEIGHT - FONT_GAP * 3 - (BAR_HEIGHT * curTime) / maxTime
  );
};

let printCloud = function (ctx) {
  renderCloud(
      ctx,
      CLOUD_X + SHADOW_OFFSET,
      CLOUD_Y + SHADOW_OFFSET,
      `rgba(0, 0, 0, 0.7)`
  );
  renderCloud(
      ctx,
      CLOUD_X,
      CLOUD_Y,
      `#fff`
  );
};
window.renderStatistics = function (ctx, players, times) {
  let maxTime = getMaxElement(times);
  printCloud(ctx);
  printHeader(ctx);
  for (let i = 0; i < players.length; i++) {
    printBottomBarText(ctx, players[i], i);
    printBar(ctx, players[i], times[i], i, maxTime);
    printTimeCaption(ctx, times[i], i, maxTime);
  }
};
