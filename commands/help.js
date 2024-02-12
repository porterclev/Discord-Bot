const getFiles = require("../components/get-files.js");
module.exports = {
  callback: (message, args, db) => {
    const suffix = ".js";
    const commandFiles = getFiles("./commands", suffix); //Directory the commands are located in
    for (const command of commandFiles) {
      message.channel.send("." + command.slice(11, -3));
    }
  },
};
