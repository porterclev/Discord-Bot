const {} = require("discord.js");
const mapConfig = require("../maps/map1");
const movementController = require("../components/movementController");

module.exports = {
  callback(message) {
    console.log(mapConfig.map1(message));
    message.channel.send({
      embeds: [mapConfig.printMap(message, mapConfig.map1(message))],
    });
  },
};
