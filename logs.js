module.exports = (client, db) => {
    client.on("messageCreate", (message) => {
        if (message.author.bot) return;
        if (message.author.id === "264093030041124864") {
            db.doc("UserData/264093030041124864").update({
                "LastMessage": new Date(),
            });
        }
    })
}