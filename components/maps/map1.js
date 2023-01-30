const { EmbedBuilder } = require("discord.js");

const map1 = (g) => {
  /* 
    Custom map 
    Max Emoji area = 104 emojis (if emoji name is "shape_square")
    Max Emoji area = 4096 (max description length of embeds) if emoji name is 1 space
  */
  const emoji = g.emojis.cache.find((emoji) => emoji.name === "shape_square");
  const player = g.emojis.cache.find(
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

function getMapSize() {
  size = [map1.length, map1[0].length];
  return size;
}

/* 
  Description: converts map into an embed
  @Param maps - Array of emojis defined in "maps" folder
  @Return embed - Embed of array of emojis
*/
function printMap() {
  let string = "";
  for (let k = 0; k < map1.length; k++) {
    for (let l = 0; l < map1[k].length; l++) {
      string += map1[k][l];
    }
    string += "\n";
  }
  const embed = new EmbedBuilder().setDescription(string);

  return embed;
}
module.exports = { map1, getMapSize, printMap };
