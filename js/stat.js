'use strict';
(function () {
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
  const WIN_MSG = `Ура вы победили!`;
  const WIN_RESULTS_MSG = `Список результатов:`;

  const renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  const getRandomBlue = function () {
    return `hsla(240,${window.utils.getRandomInt(100)}%,  50%, 1)`;
  };

  const printHeader = function (ctx) {
    ctx.fillStyle = `#000`;
    ctx.font = `16px PT Mono`;
    ctx.textBaseline = `hanging`;
    ctx.fillText(WIN_MSG, CLOUD_X + CAPTION_OFFSET_X, CAPTION_OFFSET_Y);
    ctx.fillText(WIN_RESULTS_MSG, CLOUD_X + CAPTION_OFFSET_X, CAPTION_OFFSET_Y * 2);
  };

  const getBarFillStyle = function (player) {
    if (player === `Вы`) {
      return `rgba(255, 0, 0, 1)`;
    }
    return getRandomBlue();
  };

  const printBottomBarText = function (ctx, player, idx) {
    ctx.fillStyle = `rgb(5, 5, 5)`;
    ctx.fillText(
        player,
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
        CLOUD_HEIGHT - SHADOW_OFFSET - FONT_GAP
    );
  };

  const printBar = function (ctx, curPlayer, curTime, idx, maxTime) {
    ctx.fillStyle = getBarFillStyle(curPlayer);
    ctx.fillRect(
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
        CLOUD_HEIGHT - FONT_GAP * 2 - (BAR_HEIGHT * curTime) / maxTime,
        BAR_WIDTH,
        (BAR_HEIGHT * curTime) / maxTime
    );
  };

  const printTimeCaption = function (ctx, curTime, idx, maxTime) {
    ctx.fillStyle = `rgb(5, 5, 5)`;
    ctx.fillText(
        Math.floor(curTime),
        CLOUD_X + GAP + (GAP + BAR_WIDTH) * idx,
        CLOUD_HEIGHT - FONT_GAP * 3 - (BAR_HEIGHT * curTime) / maxTime
    );
  };

  const printCloud = function (ctx) {
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
    let maxTime = window.utils.getMaxElement(times);
    printCloud(ctx);
    printHeader(ctx);
    for (let i = 0; i < players.length; i++) {
      printBottomBarText(ctx, players[i], i);
      printBar(ctx, players[i], times[i], i, maxTime);
      printTimeCaption(ctx, times[i], i, maxTime);
    }
  };
})();
