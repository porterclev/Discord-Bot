const con = require("../components/connection");

module.exports = {
  callback: (message, args) => {
    con.query("select * from discord_unity_data", (err, res) => {
      if (err) {
        console.log(err);
      } else {
        return message.channel.send(
          "Id: " +
            JSON.parse(JSON.stringify(res))[0].MyTransform +
            " Position: " +
            JSON.parse(JSON.stringify(res))[0].LastPos
        );
      }
    });
  },
};
