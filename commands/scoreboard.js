const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    let embed = new EmbedBuilder()
      .setTitle("Sekiro Scoreboard") //discord user's name
      .addFields(
	    { name: 'Isshin the Sword Saint', value: 'Moaui: 5', inline: true },)
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
