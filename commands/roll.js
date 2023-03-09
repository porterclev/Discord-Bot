const { EmbedBuilder } = require("discord.js");

let diceQuantity = 3;
let diceMax = 6;
const diceArray = [];
let rolled = "";

function multiDice() {
    while (diceArray.length < diceQuantity) {
        const random = Math.floor(Math.random() * diceMax) + 1;
        diceArray.push(random);
    }
    for (let i = 0; i < diceArray.length; i++) 
    {
        rolled += ":game_die:" + diceArray[i] + " ‎ ‎ ‎ ‎";
    }
    let total = 0;
    for (let i = 0; i < diceArray.length; i += 1)
    {
        total += diceArray[i];
    }
    return rolled + "\n" + '**TOTAL: **' + total;
}

module.exports = {
  callback: (message, args) => {
    var target = message.mentions.users.first(); //discord user
    let embed = new EmbedBuilder()
      
      .setColor(15548997)
      .setTitle(message.author.tag) //discord user's name
      .setDescription(multiDice())
    message.channel.send({ embeds: [embed] }); //sends embed to text channel message/command was sent in
  },

  
};
