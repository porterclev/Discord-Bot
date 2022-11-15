const { MessageEmbed} = require('discord.js');

module.exports = {
    callback: (message, args, map) =>{
        
        
        // let embed = new MessageEmbed()
        
        // .setDescription(`${emoji}`);
        // message.channel.send({embeds: [embed]});
        
        // var map = [[`${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `],
        //             [`${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `],
        //             [`${emoji} `, `${emoji} `, `${player} `, `${emoji} `, `${emoji} `],
        //             [`${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `],
        //             [`${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `, `${emoji} `]];
                  
        let string = ''
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                string += map[i][j]
            }
            string += "\n"
        }
        message.channel.send(string)
    }
}