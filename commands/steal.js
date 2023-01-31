const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    var target = message.mentions.users.first(); //discord user
    let embed = new EmbedBuilder()
      .setTitle(target.username) //discord user's name
      .setImage(message.mentions.users.first().avatarURL()); //url of discord user's pfp
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
