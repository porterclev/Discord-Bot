const { EmbedBuilder } = require("discord.js");

/**
 * Returns the difference in days between two dates
 * @param {Date} date1
 * @param {Date} date2
 */
function getDateDelta(date1, date2) {
  var delta =
    Math.round(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
  return delta;
}

/**
 * Randomly selects a gif from a list of gifs
 */
function gifSelector() {
  var gifs = [
    "https://media.giphy.com/media/dQCLPqlnrRkpW/giphy.gif",
    "https://media.tenor.com/GuULt2xlbV4AAAAd/dog.gif",
    "https://media1.tenor.com/m/uLq-U2cHgOgAAAAC/point-gun-shoot.gif",
    "https://c.tenor.com/tYqLnLVeU-UAAAAC/tenor.gif",
    "https://c.tenor.com/mn8DAhCjE3oAAAAC/tenor.gif",
    "https://c.tenor.com/0M7CVXnzWw4AAAAC/tenor.gif",
    "https://c.tenor.com/iBpP1Cu0Y9UAAAAC/tenor.gif",
    "https://c.tenor.com/eE2OLGiBR-QAAAAC/tenor.gif",
    "https://c.tenor.com/0T3QicVfcIkAAAAC/tenor.gif",
    "https://c.tenor.com/Qr10jgdVyG0AAAAC/tenor.gif",
    "https://c.tenor.com/iF-jXy8IZyIAAAAC/tenor.gif",
    "https://c.tenor.com/WPohVk87J8AAAAAC/tenor.gif",
  ];
  var randNum = Math.round(Math.random() * gifs.length);
  gif_str = gifs[randNum - 1];
  return gif_str;
}

module.exports = {
  callback: (message, args) => {
    // Allows for manual date increase
    var increase = 0;
    if (message.content.length > 5) {
      increase = parseInt(message.content.slice(6, 7));
    }
    // current date
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate() + increase);

    // date jude was last online
    var judeDate = new Date();
    judeDate.setFullYear(2024, 0, 9);

    // builds embed message
    let embed = new EmbedBuilder()
      .setDescription(getDateDelta(currentdate, judeDate) + " days of no Jude") //date and time
      .setImage(gifSelector());
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },
};
