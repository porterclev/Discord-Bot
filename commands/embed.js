const { EmbedBuilder } = require("discord.js");

module.exports = {
  async callback(message) {
    const embed = [
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
      new EmbedBuilder()
        .setURL("https://example.com/")
        .setImage(
          "https://media.tenor.com/aAQtrP72ZpcAAAAC/tommy-shelby-tommy.gif"
        )
        .setDescription("bruh"),
    ];

    await message.channel.send({ embeds: embed });
  },
};
