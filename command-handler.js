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
      // commands[commandName].callback(message, args, mapConfig.map1(message));
      commands[commandName].callback(message, args, db);
    } catch (error) {
      console.error(error);
    }
  });
};
