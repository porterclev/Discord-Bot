const { FieldValue } = require("firebase-admin").firestore;
module.exports = {
  callback: (message, args, db) => {
    const docRef = db.collection("InternalData").doc("Gif_links"); // reference db
    let url = message.content.slice(5); // get url from message
    const res = docRef.update({ Links: FieldValue.arrayUnion(url) }); // add url to db
  },
};
