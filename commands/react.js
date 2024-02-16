module.exports = {
  callback: (message, args, db) => {
    db.collection("InternalData")
      .doc("Gif_links")
      .get("Links")
      .then(async (doc) => {
        let channel = message.guild.channels.cache.find(
          (channel) => channel.name === message.content.slice(7)
        );
        var gifs = await doc.data().Links;
        var randNum = Math.round(Math.random() * gifs.length);
        var gif_str = gifs[randNum - 1];
        channel.send(gif_str);
        message.channel.send("you asked for this");
      });
  },
};
