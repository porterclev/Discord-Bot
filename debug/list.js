const { FieldValue } = require("firebase-admin").firestore;
module.exports = {
  callback: (message, args, db) => {
    // lists all the gifs in the database
    db.collection("InternalData")
      .doc("Gif_links")
      .get("Links")
      .then(async (doc) => {
        var gifs = await doc.data().Links;
        for (let i = 0; i < gifs.length; i++) {
          message.channel.send(gifs[i]);
        }
      });
  },
};
