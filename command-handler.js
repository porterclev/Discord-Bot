const mapConfig = require("./components/maps/map1.js");
const fs = require("fs");
const getFiles = require("./commands/get-files.js");
const controller = require("./commands/movementController.js");
const { MessageEmbed } = require("discord.js");
const { movePlayer } = require("./components/movementController.js");
const { map1 } = require("./components/maps/map1.js");

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
          .send({ embeds: [mapConfig.printMap()] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "movedown") {
        movePlayer(message, true, -1);
        message.channel
          .send({ embeds: [mapConfig.printMap()] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveleft") {
        movePlayer(message, false, -1);
        message.channel
          .send({ embeds: [mapConfig.printMap()] })
          .then((sentMessage) => {
            sentMessage.react("⬅️"),
              sentMessage.react("⬆️"),
              sentMessage.react("⬇️"),
              sentMessage.react("➡️");
          });
      } else if (commandName === "moveright") {
        movePlayer(message, false, 1);
        message.channel
          .send({ embeds: [mapConfig.printMap()] })
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
