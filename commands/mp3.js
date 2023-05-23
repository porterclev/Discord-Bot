const ytdl = require("ytdl-core");
const cache = "./components/Cache/YTmp3/";
const fs = require("fs");
const { Attachment } = require("discord.js");

module.exports = {
  callback: (message, args) => {
    let url = message.content.slice(4);
    const video = ytdl(url, { filter: "audioonly", format: "mp3" });
    video
      .pipe(fs.createWriteStream(cache + message.author.username + ".mp3"))
      .on("finish", () => {
        message.channel.send({
          files: [cache + message.author.username + ".mp3"],
        });
      });
  },
};
