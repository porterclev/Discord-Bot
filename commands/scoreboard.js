const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    let embed = new EmbedBuilder()
      .setTitle("Sekiro Scoreboard") //discord user's name
      .addFields(
        { name: 'Gauntlet of Strength', value: 'Zulanu: 10', inline: true },
        { name: 'Isshin the Sword Saint', value: 'Moaui: 5', inline: true },)
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
