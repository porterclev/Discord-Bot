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

module.exports = {
  callback: async (message, args, db) => {
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

    // Selects a random gif from the database and sends the embed
    db.collection("InternalData")
      .doc("Gif_links")
      .get("Links")
      .then(async (doc) => {
        var gifs = await doc.data().Links;
        var randNum = Math.round(Math.random() * gifs.length);
        var gif_str = gifs[randNum - 1];

        // builds embed message
        let embed = await new EmbedBuilder()
          .setDescription(
            getDateDelta(currentdate, judeDate) + " days of no Jude"
          ) //date and time
          .setImage(gif_str);
        message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
      });
  },
};
