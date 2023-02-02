const { MessageEmbed } = require("discord.js");
const { request } = require("undici");

async function view(message) {
  const viewPort = await request("");
  const { file } = await viewPort.body.json();
  message.channel.send(file);
  return file;
}
module.exports = {
  callback: (message, args, map) => {
    view(message);
  },
};
