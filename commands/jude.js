const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    var increase = 0;
    if (message.content.length > 5) {
      increase = parseInt(message.content.slice(6, 7));
    }
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + increase);
    var judeDate = new Date();
    judeDate.setFullYear(2023, 4, 4);
    judeDate.setHours(14, 26, 30, 0);
    var newDateString = currentdate.getDate() - judeDate.getDate() + " days ";
    let embed = new EmbedBuilder()
      .setDescription(newDateString + "of no Jude") //date and time
      .setImage("https://media.giphy.com/media/dQCLPqlnrRkpW/giphy.gif");
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
