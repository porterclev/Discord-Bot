const { MessageEmbed } = require("discord.js");
const { request } = require("undici");

async function cat(message) {
  const catResult = await request("");
  const { file } = await catResult.body.json();
  message.channel.send(file);
  return file;
}
module.exports = {
  callback: (message, args, map) => {
    cat(message);
  },
};
