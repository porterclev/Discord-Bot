const { MessageEmbed } = require("discord.js");

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
module.exports = map1;
