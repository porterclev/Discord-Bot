const { Embed } = require("discord.js");

/**
 * sends an embed with buttons in channel of message
 * @param {message} m - message information
 * @param {embed} e - embed
 * @param {button} b - actionbuilder button
 */
function embedButtonInterface(m, e, b) {
  m.channel.send({
    embeds: [e],
    components: [b],
  });
}

module.exports = {
  embedButtonInterface,
};
