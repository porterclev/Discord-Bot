const ytdl = require("ytdl-core");
const fs = require("fs");
const voice = require("@discordjs/voice");
const { join } = require("path");
const mediaPath = join(__dirname, "../components/Media");
const songList = [19];

let count = 0;
try {
  for (let i = 0; i < 19; i++) {
    count = 0;
    let songDir =
      mediaPath + "/song" + Math.round(Math.random() * 20 + 1) + ".mp3";

    for (let j = 0; j < 19; j++) {
      if (songList[j] === songDir) {
        count++;
      }
    }

    if (count === 0) {
      songList[i] = songDir;
    } else {
      i--;
    }
  }
} catch (error) {
  console.log("Error: " + error);
}

module.exports = {
  callback: (message, args) => {
    message.channel.send("command is currently disabled");
    return;
    const audioplayer = voice.createAudioPlayer();
    let path = 0;
    voice
      .joinVoiceChannel({
        channelId: message.member.voice.channel.id,
        guildId: message.guild.id,
        adapterCreator: message.guild.voiceAdapterCreator,
      })
      .subscribe(audioplayer);
    let resource = voice.createAudioResource(songList[path]);
    audioplayer.play(resource);

    audioplayer.on(voice.AudioPlayerStatus.Idle, () => {
      if (path < 19) {
        path++;
        resource = voice.createAudioResource(songList[path]);
        audioplayer.play(resource);
      } else {
        console.log("Playlist finished");
        audioplayer.stop();
      }
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
