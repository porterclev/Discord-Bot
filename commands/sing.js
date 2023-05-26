const ytdl = require("ytdl-core");
const fs = require("fs");
const voice = require("@discordjs/voice");
const { join } = require("path");

module.exports = {
  callback: (message, args) => {
    let url = message.content.slice(6);
    if (url.slice(12, 23) !== "youtube.com") {
      message.channel.send("Please enter a youtube link");
      throw "Not a YouTube Link";
    } else if (ytdl.validateURL(url) === false) {
      message.channel.send("Please enter a valid youtube link");
      throw "Invalid YouTube link";
    }

    const stream = ytdl(url, { filter: "audioonly" });

    const audioplayer = voice.createAudioPlayer();
    voice
      .joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      })
      .subscribe(audioplayer);

    const resource = voice.createAudioResource(stream);

    audioplayer.play(resource);
    audioplayer.on(voice.AudioPlayerStatus.Idle, () => {
      audioplayer.stop();
    });
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
