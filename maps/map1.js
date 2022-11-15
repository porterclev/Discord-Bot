const { MessageEmbed} = require('discord.js');

const map1 = (g) => {
    const emoji = g.emojis.cache.find(emoji => emoji.name === 'hole');
    const player = g.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA');
    let map = [[`${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`],
                    [`${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`],
                    [`${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`],
                    [`${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`],
                    [`${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`, `${emoji}`]];
    return map;
    
}
module.exports = map1;