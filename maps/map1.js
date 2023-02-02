const {
  EmbedBuilder,
  SlashCommandSubcommandGroupBuilder,
} = require("discord.js");
const movementController = require("../components/movementController");

/**
 * Universal map without player and hardcoded emoji placement
 * @return {string[][]} map of the game
 */
function map1(g) {
  const emoji = g.guild.emojis.cache.find((emoji) => emoji.name === "yay");
  let map = [
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
    [
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
      `${emoji}`,
    ],
  ];
  return map;
}

/**
 * Returns the size of the array
 * @param {message} g - discord message information
 * @return {integer[]} [column length, row length]
 */
function getMapSize(g) {
  size = [map1(g).length, map1(g)[0].length];
  return size;
}

/**
 * Converts map into an embed
 * @param {message} g - discord message information
 * @param {String[][]} map - prints a map in the form of a 2D array
 * @return {embed}
 */
function printMap(g, map) {
  let string = "";
  for (let k = 0; k < map.length; k++) {
    for (let l = 0; l < map[k].length; l++) {
      if (
        k === movementController.getPlayerLocation()[1] &&
        l === movementController.getPlayerLocation()[0]
      ) {
        map[k][l] = `${movementController.getPlayerEmoji(g)}`;
      }
      string += map[k][l];
    }
    string += "\n";
  }
  const embed = new EmbedBuilder().setDescription(string);

  return embed;
}

/**
 * Sends an empty map without the player
 * @param {message} m - message/server information
 * @param {String[][]} map - 2D array of the map
 */
function printEmptyMap(m, map) {
  message.channel.send({
    embeds: [printMap(m, map)],
  });
}
module.exports = { map1, getMapSize, printMap, printEmptyMap };
