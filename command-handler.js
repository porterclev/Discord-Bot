const fs = require("fs");
const getFiles = require("./commands/get-files.js");
const map = require("./maps/map1.js");
const controller = require("./commands/movementController.js");
const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  const commands = {};
  const suffix = ".js";

  const commandFiles = getFiles("./commands", suffix); //Directory the commands are located in

  console.log(commandFiles); //prints all commands in directory

  /* 
    converts all files in directory to commands 
  */
  for (const command of commandFiles) {
    let commandFile = require(command);
    if (commandFile.default) {
      commandFile = commandFile.default;
    }

    const split = command.replace(/\\/g, "/").split("/");
    const commandName = split[split.length - 1].replace(suffix, "");

    commands[commandName.toLowerCase()] = commandFile;
  }

  /* 
    ---TESTING GAME PlAYER CONTROLLER---
  */
  let playerX = 0;
  let playerY = 1;
  client.on("messageCreate", (message) => {
    /* 
      Description: moves player on the map
      @Param message - contains channel information where the command was typed in
      @Param vertical (Bool) - if player is moving up or down
      @Param units (Int) - amount of spaces the player will move
      @Return units (Int) - amount of spaces the player was moved
    */
    function movePlayer(message, vertical, units) {
      maps[playerY][playerX] = `${message.guild.emojis.cache.find(
        (emoji) => emoji.name === "hole"
      )}`;
      if (vertical === true) {
        playerY -= units;
        maps[playerY][playerX] = `${message.guild.emojis.cache.find(
          (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
        )}`;
        return units;
      } else if (vertical === false) {
        playerX += units;
        maps[playerY][playerX] = `${message.guild.emojis.cache.find(
          (emoji) => emoji.name === "WAAHWAAHBOOHOO_NIBBA"
        )}`;
        return units;
      }
    }

    /* 
      Description: converts map into an embed
      @Param maps - Array of emojis defined in "maps" folder
      @Return embed - Embed of array of emojis
    */
    function printMap(maps) {
      let string = "";
      for (let k = 0; k < maps.length; k++) {
        for (let l = 0; l < maps[k].length; l++) {
          string += maps[k][l];
        }
        string += "\n";
      }
      const embed = new MessageEmbed().setDescription(string);
      return embed;
    }

    let maps = map(message.guild);
    if (message.author.bot || !message.content.startsWith(".")) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    try {
      // Checks if directional movement commands are called
      if (commandName === "moveup") {
        movePlayer(message, true, 1);
        message.channel
          .send({ embeds: [printMap(maps)] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "movedown") {
        movePlayer(message, true, -1);
        message.channel
          .send({ embeds: [printMap(maps)] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveleft") {
        movePlayer(message, false, -1);
        message.channel
          .send({ embeds: [printMap(maps)] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveright") {
        movePlayer(message, false, 1);
        message.channel
          .send({ embeds: [printMap(maps)] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "cat") {
      } else {
        commands[commandName].callback(message, args, maps);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
