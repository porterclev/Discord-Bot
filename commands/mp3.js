const ytdl = require("ytdl-core");
const cache = "./components/Cache/YTmp3/";
const fs = require("fs");
const { Attachment } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    message.channel.send("Caching File...");
    let url = args[0];
    const video = ytdl(url, { filter: "audioonly", format: "mp3" });
    video
      .pipe(fs.createWriteStream(cache + message.author.username + ".mp3"))
      .on("finish", () => {
        message.channel.send("Uploading File...");
        message.channel.send({
          files: [cache + message.author.username + ".mp3"],
        });
      });
  },
};
