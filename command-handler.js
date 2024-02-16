require("dotenv").config();
const serviceAccount = require("./discord-bot-auth.json");
const mapConfig = require("./maps/map1.js");
const getFiles = require("./components/get-files.js");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
  Filter,
} = require("firebase-admin/firestore");

const firebaseConfig = {
  credential: cert(serviceAccount),
};
initializeApp(firebaseConfig);
const db = getFirestore();

module.exports = (client) => {
  const owner_ids = process.env.OWNER_IDS.split(' ');
  const commands = {};
  const debugCommands = {};
  const suffix = ".js";
  const commandFiles = getFiles("./commands", suffix); //Directory the commands are located in
  const debugFiles = getFiles("./debug", suffix);      //Directory the debug commands are located in
  console.log(commandFiles); //prints all commands in directory
  console.log(debugFiles);   //prints all debug commands in directory

  /* 
    converts all files in directory to commands 
  */
  for (const command of commandFiles) {
    let commandFile = require(command);
    if (commandFile.default) {
      commandFile = commandFile.default;
    }

    const splitCommand = command.replace(/\\/g, "/").split("/");
    const commandName = splitCommand[splitCommand.length - 1].replace(suffix, "");

    commands[commandName.toLowerCase()] = commandFile;
  }
  /* 
    converts all files in debug directory to commands
  */
  for (const debug of debugFiles) {
    let debugFile = require(debug);
    if (debugFile.default) {
      debugFile = debugFile.default;
    }

    const splitDebug = debug.replace(/\\/g, "/").split("/");
    const debugName = splitDebug[splitDebug.length - 1].replace(suffix, "");

    debugCommands[debugName.toLowerCase()] = debugFile;
  }

  /**
   * description Runs code when a message is sent in a text channel on discord
   * @param message - message that was sent
   */
  client.on("messageCreate", (message) => {
    //cancels processing if auther is a bot or message doesn't start with "."
    if (message.author.bot || !message.content.startsWith("!")) {
      return;
    }
    const args = message.content.slice(1).split(/ +/);  // parses args out of message (array)
    const commandName = args.shift().toLowerCase();

    /* 
      Checks if the command is for debugging, 
        if true, check for user permissions
    */
    if (commands[commandName]) {
      try {
        // commands[commandName].callback(message, args, mapConfig.map1(message));
        commands[commandName].callback(message, args, db);
      } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command");
      }
    } else if (debugCommands[commandName] && owner_ids.includes(message.author.id)) {
      try {
        debugCommands[commandName].callback(message, args, db);
      } catch (error) {
        console.error(error);
        message.channel.send("There was an error trying to execute that command");
      }
    } else {
      message.channel.send("Command not found");
    }
  });
};
