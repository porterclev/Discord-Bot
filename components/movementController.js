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

module.exports = {
  movePlayer,
  getPlayerLocation,
  getPlayerEmoji,
};
