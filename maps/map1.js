const {
  EmbedBuilder,
  SlashCommandSubcommandGroupBuilder,
} = require("discord.js");
const movementController = require("../components/movementController");

/**
 * Universal map without player and hardcoded emoji placement
 * @return {string[][]} map of the game
 */
const map1 = (g) => {
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
};

/**
 * Returns the size of the array
 * @param {object} g - discord message information
 * @return {integer[]} [column length, row length]
 */
function getMapSize(g) {
  size = [map1(g).length, map1(g)[0].length];
  return size;
}

/**
 * Converts map into an embed
 * @param {object} g - discord message information
 * @param {String[][]} map - prints a map in the form of a 2D array
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
module.exports = { map1, getMapSize, printMap };
