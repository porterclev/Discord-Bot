const { MessageEmbed} = require('discord.js');
module.exports = {
    callback: (message, args, map) =>{
        /* 
        
        */
        const hole = message.guild.emojis.cache.find(emoji => emoji.name === 'hole');
        const player = message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA')
        let x = 0;
        let y = 0;
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(map[i][j] === `${player}`){
                    x = j;
                    y = i;
                }
            }
        }

        map[y][x] = `${hole}`;
        y -= 1;
        map[y][x] = `${player}`;

        

        return map;
    }
}