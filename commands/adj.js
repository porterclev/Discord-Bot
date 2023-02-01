const { getAdjective } = require("../components/adjScrape");

module.exports = {
  async callback(message) {
    message.channel.send(await getAdjective());
  },
};
