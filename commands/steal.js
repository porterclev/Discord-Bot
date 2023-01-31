const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    var target = message.mentions.users.first();
    let embed = new EmbedBuilder()
      .setTitle(target.username)
      .setImage(message.mentions.users.first().avatarURL());
    message.channel.send({ embeds: [embed] });
  },
};
