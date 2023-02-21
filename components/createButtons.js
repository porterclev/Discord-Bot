const { ActionRowBuilder, ButtonBuilder } = require("discord.js");

/**
 * Creates buttons
 * @param {Map<string, string>} b - map of buttons "Id: Label"
 * @param {string} style - Primary, Secondary, Success, Danger, and Link
 */

function createList(b, style) {
  button = new ActionRowBuilder();
  Object.keys(b).forEach(function (key) {
    var value = b[key];

    button.addComponents(
      new ButtonBuilder()
        .setCustomId(`${key}`)
        .setLabel(`${value}`)
        .setStyle(style)
    );
  });
  return button;
}

module.exports = { createList };
