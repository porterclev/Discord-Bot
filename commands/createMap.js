const { EmbedBuilder } = require("discord.js");
const mapConfig = require("../maps/map1");

module.exports = {
  callback: (message, args, map) => {
    //sends map into text channel of message/channel
    message.channel.send({
      embeds: [mapConfig.printMap(message, map)],
    });
  },
};
