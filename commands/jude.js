const { EmbedBuilder } = require("discord.js");

/**
 * Returns the difference in days between two dates
 * @param {Date} date1
 * @param {Date} date2
 */
function getDateDelta(date1, date2) {
  let delta =
    (date1.getTime() - date2.getTime()) / (1000 * 3600 * 24);
  return delta;
}

module.exports = {
  callback: async (message, args, db) => {
    // Allows for manual date increase
    let increase = 0;
    if (message.content.length > 5) {
      increase = parseInt(message.content.slice(6, 7));
    }

    let currentdate = new Date();

    // Selects a random gif from the database and sends the embed
    const judeData = await db.collection("UserData").doc("264093030041124864").get();
    let judeDate = judeData.data().LastMessage.toDate();

    const gifData = await db.collection("InternalData").doc("Gif_links").get("Links");
    var gifs = gifData.data().Links;

    var randNum = Math.round(Math.random() * gifs.length);
    var gif_str = gifs[randNum - 1];
    let dateDetla = await getDateDelta(currentdate, judeDate);

    // builds embed message
    let embed = new EmbedBuilder()
      .setDescription(
        Math.round(dateDetla) + " days of no Jude"
      ) //date and time
      .setImage(gif_str);
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
    message.delete();
  },
};
