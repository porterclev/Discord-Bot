const mapConfig = require("./maps/map1.js");
const getFiles = require("./commands/get-files.js");
const movementController = require("./components/movementController.js");
const adjAdj = require("./components/adjScrape.js");

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
    Runs code when a message is sent in a text channel on discord 
    @Param message - message that was sent
  */
  client.on("messageCreate", (message) => {
    //cancels processing if auther is a bot or message doesn't start with "."
    if (message.author.bot || !message.content.startsWith(".")) {
      return;
    }

    const args = message.content.slice(1).split(/ +/);
    const commandName = args.shift().toLowerCase();

    try {
      /* 
        ---TESTING---
        Checks if directional movement commands are called 
      */
      if (commandName === "moveup") {
        //moves player up 1 unit
        movementController.movePlayer(message, true, 1);
        message.channel //send embed of game map with player to channel message/command was sent in
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
        //moves player down 1 unit
        movementController.movePlayer(message, true, -1);
        message.channel //send embed of game map with player to channel message/command was sent in
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
        //moves player left 1 unit
        movementController.movePlayer(message, false, -1);
        message.channel //send embed of game map with player to channel message/command was sent in
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
        //moves player right 1 unit
        movementController.movePlayer(message, false, 1);
        message.channel //send embed of game map with player to channel message/command was sent in
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
        commands[commandName].callback(message, args, mapConfig.map1(message));
      }
    } catch (error) {
      console.error(error);
    }
  });
};
