const mapConfig = require("../maps/map1.js");
const { EmbedBuilder } = require("discord.js");

var playerX = 0;
var playerY = 0;
var playerEmoji = "WAAHWAAHBOOHOO_NIBBA";

/**
 * Moves player on the map
 * @param {message} m - description
 * @param {Bool} vertical- if player is moving vertical
 * @param {Integer} units - distance player will move
 */
function movePlayer(m, vertical, units) {
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
 * @param {message} m - discord message information
 * @return {Map<String, Integer>} String of emoji name and Integer of emoji id
 */
function getPlayerEmoji(m) {
  let e = m.guild.emojis.cache.find((emoji) => emoji.name === playerEmoji);
  return e;
}

/**
 * moves player up
 * @param {Integer} units - moves player this many units
 * @param {message} m - message/bot information
 */
function moveUp(m, units) {
  //moves player up 1 unit
  movePlayer(m, true, units);
  m.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(m, mapConfig.map1(m))],
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
 * @param {message} m - message/bot information
 */
function moveDown(m, units) {
  //moves player down 1 unit
  movePlayer(m, true, -units);
  m.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(m, mapConfig.map1(m))],
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
 * @param {message} m - message/bot information
 */
function moveLeft(m, units) {
  //moves player left 1 unit
  movePlayer(m, false, -units);
  m.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(m, mapConfig.map1(m))],
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
 * @param {message} m - message/bot information
 */
function moveRight(m, units) {
  //moves player right 1 unit
  movePlayer(m, false, units);
  m.channel //send embed of game map with player to channel message/command was sent in
    .send({
      embeds: [mapConfig.printMap(m, mapConfig.map1(m))],
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
