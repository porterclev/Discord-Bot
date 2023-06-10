const ytdl = require("ytdl-core-discord");
const fs = require("fs");
const voice = require("@discordjs/voice");
const cache = "./components/Cache/YTmp3/";

module.exports = {
  callback: async (message, args) => {
    let url = message.content.slice(6);
    if (url.slice(12, 23) !== "youtube.com") {
      message.channel.send("Please enter a youtube link");
      throw "Not a YouTube Link";
    } else if (ytdl.validateURL(url) === false) {
      message.channel.send("Please enter a valid youtube link");
      throw "Invalid YouTube link";
    }

    // const stream = ytdl(url, { filter: "audioonly", format: "mp3" });
    // const stream = ytdl(url, { filter: "audioonly" });
    /* stream
      .pipe(fs.createWriteStream(cache + message.author.username + ".mp3"))
      .on("finish", () => {
        message.channel.send({
          files: [cache + message.author.username + ".mp3"],
        });
      }); */

    const connection = voice.joinVoiceChannel({
      channelId: message.member.voice.channel.id,
      guildId: message.guild.id,
      adapterCreator: message.guild.voiceAdapterCreator,
    });
    // const path = cache + message.author.username + ".mp3";
    const stream = await ytdl(url, {
      filter: "audioonly",
      quality: "highestaudio",
      highWaterMark: 1 << 25,
    });
    // stream.pipe(fs.createWriteStream(path)).on("finish", () => {});
    const audioplayer = voice.createAudioPlayer();
    const resource = voice.createAudioResource(stream, {
      inputType: voice.StreamType.Opus,
    });
    audioplayer.play(resource);
    connection.subscribe(audioplayer);

    audioplayer.on(voice.AudioPlayerStatus.Buffering, () => {
      console.log("Buffering");
    });

    audioplayer.on(voice.AudioPlayerStatus.Idle, () => {
      console.log("Idle");
    });

    /* const resource = voice.createAudioResource(
      "../components/Cache/YTmp3/Gangus.mp3"
    ); */

    /* audioplayer.on(voice.AudioPlayerStatus.Idle, () => {
      //   fs.rmdir(cache + message.author.username + ".mp3", (err) => {});
      audioplayer.stop();
    }); */
    /* 
    if (message.content === ".pause") {
      audioplayer.pause();
    }

    if (message.content === ".resume") {
      audioplayer.unpause();
    }

    if (message.content === ".skip") {
      path++;
      resource = voice.createAudioResource(songList[path]);
      audioplayer.play(resource);
    } */
  },
};
