const {} = require("discord.js");
const mapConfig = require("../maps/map1");
const movementController = require("../components/movementController");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { embedButtonInterface } = require("../components/embedInterface");
const { createList } = require("../components/createButtons");

// Movement Button Component
const button = createList(
  {
    playerRight: "Right",
    playerLeft: "Left",
    playerUp: "Up",
    playerDown: "Down",
  },
  "Primary"
);

// Creates embed with the map
function screen(message) {
  return mapConfig.printMap(message, mapConfig.map1(message));
}

module.exports = {
  callback(message) {
    // Starting Message
    let embed = screen(message);
    embedButtonInterface(message, embed, button);

    // Message Collector
    const collector = message.channel.createMessageComponentCollector();

    // Interaction Loop -- add an end
    collector.on("collect", async (i) => {
      // moving right
      if (i.customId === "playerRight") {
        movementController.movePlayer(message, false, 1);

        // moving left
      } else if (i.customId === "playerLeft") {
        movementController.movePlayer(message, false, -1);

        //moving up
      } else if (i.customId === "playerUp") {
        movementController.movePlayer(message, true, 1);

        //moving down
      } else if (i.customId === "playerDown") {
        movementController.movePlayer(message, true, -1);
      }

      // Updates message
      await i.update({ embeds: [screen(message)], components: [button] });
    });
  },
};
