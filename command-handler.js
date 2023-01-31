const mapConfig = require("./maps/map1.js");
const fs = require("fs");
const getFiles = require("./commands/get-files.js");
const controller = require("./commands/movementController.js");
const {
  MessageEmbed,
  SlashCommandSubcommandGroupBuilder,
} = require("discord.js");
const movementController = require("./components/movementController.js");

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

  client.on("messageCreate", (message) => {
    // let maps = map(message.guild);

    //cancels processing if auther is a bot or message doesn't start with "."
    if (message.author.bot || !message.content.startsWith(".")) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    try {
      /* let maps = [];
      for (let i = 0; i < mapConfig.map1(message).length; i++) {
        maps[i] = new Array(mapConfig.getMapSize(message)[1]);
        for (let j = 0; j < mapConfig.getMapSize(message)[1]; j++) {
          maps[i][j] = mapConfig.map1(message)[i][j];

          if (
            i === movementController.getPlayerLocation()[0] &&
            j === movementController.getPlayerLocation()[1]
          ) {
            maps[i][j] = movementController.getPlayerEmoji(message);
          }
        }
      } */

      // Checks if directional movement commands are called
      if (commandName === "moveup") {
        movementController.movePlayer(message, true, 1);
        message.channel
          .send({
            embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
          })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "movedown") {
        movementController.movePlayer(message, true, -1);
        message.channel
          .send({
            embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
          })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveleft") {
        movementController.movePlayer(message, false, -1);
        message.channel
          .send({
            embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
          })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveright") {
        movementController.movePlayer(message, false, 1);
        message.channel
          .send({
            embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
          })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else {
        commands[commandName].callback(message, args);
      }
    } catch (error) {
      console.error(error);
    }
  });
};
