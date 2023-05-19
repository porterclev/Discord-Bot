const { EmbedBuilder } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    var currentdate = new Date();

    var judeDate = new Date();
    judeDate.setFullYear(2023, 4, 5);
    judeDate.setHours(14, 26, 30, 0);
    var newDateString = currentdate.getDate() - judeDate.getDate() + " days ";
    /*+ currentdate.getMonth() -
      judeDate.getMonth() +
      " months " +
      currentdate.getFullYear() -
      judeDate.getFullYear() +
      " years " +
      currentdate.getHours() -
      judeDate.getHours() +
      " hours " +
      currentdate.getMinutes() -
      judeDate.getMinutes() +
      " minutes "; */
    /*      + currentdate.getSeconds() -
      judeDate.getSeconds() +
      " seconds   "; */
    let embed = new EmbedBuilder()
      .setDescription(newDateString + "of no Jude") //date and time
      .setImage("https://media.giphy.com/media/dQCLPqlnrRkpW/giphy.gif");
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
