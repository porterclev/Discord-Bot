const {
  EmbedBuilder,
  SlashCommandSubcommandGroupBuilder,
} = require("discord.js");

const movementController = require("../components/movementController");

/* 
  Custom map 
  Max Emoji area = 104 emojis (if emoji name is "shape_square")
  Max Emoji area = 4096 (max description length of embeds) if emoji name is 1 space
*/
const map1 = (g) => {
  const emoji = g.guild.emojis.cache.find((emoji) => emoji.name === "yay");
  const player = g.guild.emojis.cache.find(
    (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
  );
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

/* 
  gets size of the array
  @Param g - message information
  @Return size(array) - index 0 is column length and index 1 is row length
*/
function getMapSize(g) {
  size = [map1(g).length, map1(g)[0].length];
  return size;
}

/* 
  Description: converts map into an embed
  @Param g - message information
  @Return embed - Embed of array of emojis
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
