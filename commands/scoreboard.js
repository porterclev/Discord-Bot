const { ActionRowBuilder, ButtonBuilder, EmbedBuilder, ComponentType } = require("discord.js");
const { embedButtonInterface } = require("../components/embedInterface");
const { createList } = require("../components/createButtons");
let boards = ["Sekiro", "Elden Ring", "Gaydar"];
let boardIcons = ["https://i.imgur.com/Br4NfBm.jpeg", "https://i.imgur.com/bxy3Fpq.jpeg", "https://i.imgur.com/QWoNv.jpeg"]

module.exports = {
  callback: (message, args, db) => {
    let nextBoardId = Math.floor(Math.random() * 100000);
    let button = new ActionRowBuilder();

    button.addComponents(
      new ButtonBuilder()
        .setCustomId(`${nextBoardId}`)
        .setLabel(`Next Board`)
        .setStyle(
          "Primary"
        )
    );
    if (args[0] === "view") {
      var board = 0;
      let embed = new EmbedBuilder()
        .setTitle("Lekohan's Scoreboard") //discord user's name
        .addFields(
          { name: 'Click Next Board', value: 'To view the next board', inline: false },
        )
      embedButtonInterface(message, embed, button);
      const collector = message.channel.createMessageComponentCollector({ componentType: ComponentType.Button, time: 60_000 });
      collector.on("collect", async (i) => {
        // moving right
        if (i.customId === nextBoardId.toString()) {
          if (board >= boards.length - 1) {
            board = 0;
          } else {
            board++;
          }
          db.collection("InternalData")
            .doc(boards[board])
            .get()
            .then(async (doc) => {
              let message = new EmbedBuilder()
                .setTitle(`${boards[board]} Scoreboard`)
                .setImage(boardIcons[board])

              let data = doc.data();
              Object.entries(data).forEach(([key, player]) => {
                message.addFields(
                  { name: key, value: player, inline: true }
                );
              });

              // Updates message
              await i.update({ embeds: [message], components: [button] });
            });
        }
      });
      collector.on("end", async (collected) => {
        console.log("Scoreboard Timeout")
      });
    }
  },
};
