const mapConfig = require("../maps/map1.js");
const { EmbedBuilder } = require("discord.js");

function moveUp(message, map) {
  const hole = message.guild.emojis.cache.find(
    (emoji) => emoji.name === "hole"
  );
  const player = message.guild.emojis.cache.find(
    (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
  );
  let x = 0;
  let y = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] === `${player}`) {
        x = j;
        y = i;
      }
    }
  }

  map[y][x] = `${hole}`;
  y -= 1;
  map[y][x] = `${player}`;
  return map;
}
function moveDown(message, map) {
  let hole = message.guild.emojis.cache.find((emoji) => emoji.name === "hole");
  let player = message.guild.emojis.cache.find(
    (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
  );
  let x = 0;
  let y = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] === `${player}`) {
        x = j;
        y = i;
      }
    }
  }

  map[y][x] = `${hole}`;
  y += 1;
  map[y][x] = `${player}`;
  return map;
}
function moveLeft(message, map) {
  let hole = message.guild.emojis.cache.find((emoji) => emoji.name === "hole");
  let player = message.guild.emojis.cache.find(
    (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
  );
  let x = 0;
  let y = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] === `${player}`) {
        x = j;
        y = i;
      }
    }
  }

  map[y][x] = `${hole}`;
  x -= 1;
  map[y][x] = `${player}`;
  return map;
}
function moveRight(message, map) {
  let hole = message.guild.emojis.cache.find((emoji) => emoji.name === "hole");
  let player = message.guild.emojis.cache.find(
    (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
  );
  let x = 0;
  let y = 0;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (map[i][j] === `${player}`) {
        x = j;
        y = i;
      }
    }
  }

  map[y][x] = `${hole}`;
  x += 1;
  map[y][x] = `${player}`;
  return map;
}

/* 
  Description: moves player on the map
  @Param message - contains channel information where the command was typed in
  @Param vertical (Bool) - if player is moving up or down
  @Param units (Int) - amount of spaces the player will move
  @Return units (Int) - amount of spaces the player was moved
*/
function movePlayer(message, vertical, units) {
  let playerX = 0;
  let playerY = 1;
  fillerEmoji = message.guild.emojis.cache.find(
    (emoji) => emoji.name === mapConfig.map1(message)[0][0].name
  );
  let maps = [];
  for (let i = 0; i < mapConfig.map1(message).length; i++) {
    maps[i] = new Array(mapConfig.getMapSize(message)[1]);
    for (let j = 0; j < mapConfig.getMapSize(message)[1]; j++) {
      maps[i][j] = mapConfig.map1(message)[i][j];
    }
  }

  maps[playerY][playerX] = `${fillerEmoji}`;
  if (vertical === true) {
    playerY -= units;
    maps[playerY][playerX] = `${message.guild.emojis.cache.find(
      (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
    )}`;
    return maps;
  } else if (vertical === false) {
    playerX += units;
    maps[playerY][playerX] = `${message.guild.emojis.cache.find(
      (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
    )}`;
    return maps;
  }
}

module.exports = { moveDown, moveUp, moveLeft, moveRight, movePlayer };
