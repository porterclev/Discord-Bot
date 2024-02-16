const { EmbedBuilder } = require("discord.js");
const con = require("../components/connection");

module.exports = {
  callback: (message, args) => {
    // Creates dice embed and rolls dice
    let diceQuantity = 3;
    let diceMax = 6;
    const diceArray = [];
    let rolled = "";
    function multiDice() {
      while (diceArray.length < diceQuantity) {
        const random = Math.floor(Math.random() * diceMax) + 1;
        diceArray.push(random);
      }

      for (let i = 0; i < diceArray.length; i++) {
        rolled += ":game_die:" + diceArray[i] + " ‎ ‎ ‎ ‎";
      }

      let total = 0;
      for (let i = 0; i < diceArray.length; i += 1) {
        total += diceArray[i];
      }
      return total;
    }

    let rollNum = multiDice();
    let embed = new EmbedBuilder()

      .setColor(15548997)
      .setTitle(message.author.tag) //discord user's name
      .setDescription(rolled + "\n" + "**TOTAL: **" + rollNum);

    // Update the database with the new roll value
    con.query(
      "UPDATE discord_unity_data SET ? WHERE ID=?",
      [{ Roll_Value: rollNum }, message.author.id],
      (err, res) => {
        if (err) {
          console.log(err);
          message.channel.send("Database is currently unavailable.");
        } else {
          return message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
        }
      }
    );
  },
};
