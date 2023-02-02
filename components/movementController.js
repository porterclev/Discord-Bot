const mapConfig = require("../maps/map1.js");
const { EmbedBuilder } = require("discord.js");

var playerX = 0;
var playerY = 0;
var playerEmoji = "WAAHWAAHBOOHOO_NIBBA";

/**
 * Moves player on the map
 * @param {object} message - description
 * @param {Bool} vertical- if player is moving vertical
 * @param {Integer} units - distance player will move
 */
function movePlayer(message, vertical, units) {
  if (vertical === true) {
    playerY -= units;
  } else if (vertical === false) {
    playerX += units;
  }
}

/**
 * Gets the location of the player
 * @return {Integer[]} [column number, row number]
 */
function getPlayerLocation() {
  let loc = [playerX, playerY];
  return loc;
}

/**
 * Player emoji representation
 * @param {object} message - discord message information
 * @return {Map<String, Integer>} String of emoji name and Integer of emoji id
 */
function getPlayerEmoji(message) {
  let e = message.guild.emojis.cache.find(
    (emoji) => emoji.name === playerEmoji
  );
  return e;
}

/**
 * moves player up
 * @param {Integer} units - moves player this many units
 * @param {object} message - message/bot information
 */
function moveUp(message, units) {
  //moves player up 1 unit
  movePlayer(message, true, units);
  message.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
    })
    .then((sentMessage) => {
      sentMessage.react("⬅️"),
        sentMessage.react("⬆️"),
        sentMessage.react("⬇️"),
        sentMessage.react("➡️");
    });
}

/**
 * moves player up
 * @param {Integer} units - moves player this many units
 * @param {object} message - message/bot information
 */
function moveDown(message, units) {
  //moves player down 1 unit
  movePlayer(message, true, -units);
  message.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
    })
    .then((sentMessage) => {
      sentMessage.react("⬅️"),
        sentMessage.react("⬆️"),
        sentMessage.react("⬇️"),
        sentMessage.react("➡️");
    });
}

/**
 * moves player up
 * @param {Integer} units - moves player this many units
 * @param {object} message - message/bot information
 */
function moveLeft(message, units) {
  //moves player left 1 unit
  movePlayer(message, false, -units);
  message.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
    })
    .then((sentMessage) => {
      sentMessage.react("⬅️"),
        sentMessage.react("⬆️"),
        sentMessage.react("⬇️"),
        sentMessage.react("➡️");
    });
}

/**
 * moves player up
 * @param {Integer} units - moves player this many units
 * @param {object} message - message/bot information
 */
function moveRight(message, units) {
  //moves player right 1 unit
  movePlayer(message, false, units);
  message.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
    })
    .then((sentMessage) => {
      sentMessage.react("⬅️"),
        sentMessage.react("⬆️"),
        sentMessage.react("⬇️"),
        sentMessage.react("➡️");
    });
}

module.exports = {
  movePlayer,
  getPlayerLocation,
  getPlayerEmoji,
  moveUp,
  moveDown,
  moveLeft,
  moveRight,
};
