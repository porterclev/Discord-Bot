const { MessageEmbed} = require('discord.js');


function moveUp(message, map){
    const hole = message.guild.emojis.cache.find(emoji => emoji.name === 'hole');
    const player = message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA');
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
function moveDown(message, map){
    let hole = message.guild.emojis.cache.find(emoji => emoji.name === 'hole');
    let player = message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA');
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
    y += 1;
    map[y][x] = `${player}`;
    return map;
}
function moveLeft(message, map){
    let hole = message.guild.emojis.cache.find(emoji => emoji.name === 'hole');
    let player = message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA');
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
    x -= 1;
    map[y][x] = `${player}`;
    return map;
}
function moveRight(message, map){
    let hole = message.guild.emojis.cache.find(emoji => emoji.name === 'hole');
    let player = message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA');
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
    x += 1;
    map[y][x] = `${player}`;
    return map;
}

module.exports = {moveDown, moveUp, moveLeft, moveRight}