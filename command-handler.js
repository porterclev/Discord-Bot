const fs = require('fs');
const getFiles = require('./commands/get-files.js');
const map = require('./maps/map1.js')
const controller = require('./commands/movementController.js');

module.exports = (client) => {
    const commands = {};
    const suffix = '.js';

    const commandFiles = getFiles('./commands', suffix);
    
    console.log(commandFiles);

    for(const command of commandFiles){
        let commandFile = require(command);
        if(commandFile.default){ commandFile = commandFile.default; }

        const split = command.replace(/\\/g, '/').split('/');
        const commandName = split[split.length - 1].replace(suffix, '');

        commands[commandName.toLowerCase()] = commandFile;
    }

    console.log(commands);
    let playerX = 0;
    let playerY = 1;
    client.on('messageCreate', (message) => {
        function movePlayer(message, vertical, units){
            maps[playerY][playerX] = `${message.guild.emojis.cache.find(emoji => emoji.name === 'hole')}`
            if(vertical === true){
                playerY -= units;
                maps[playerY][playerX] = `${message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA')}`;
                return units;
            }else if(vertical === false){
                playerX += units;
                maps[playerY][playerX] = `${message.guild.emojis.cache.find(emoji => emoji.name === 'WAAHWAAHBOOHOO_NIBBA')}`;
                return units;
            }
        }

        function printMap(maps){
            let string = '';
                for(let k = 0; k < 5; k++){
                    for(let l = 0; l < 5; l++){
                        string += maps[k][l]
                    }
                    string += "\n"
                }
            return string;
        }
        
        let maps = map(message.guild);
        if(message.author.bot || !message.content.startsWith('.')){
            return;
        }
        
        const args = message.content.slice(1).split(/ +/);
        const commandName = args.shift().toLowerCase();

        try{
            /* 
            Checks if directional movement commands are called
            */
            if(commandName === "moveup"){
                movePlayer(message, true, 1);
                message.channel.send(printMap(maps)).then(sentMessage => {
                    sentMessage.react('⬅️'),
                    sentMessage.react('⬆️'),
                    sentMessage.react('⬇️'),
                    sentMessage.react('➡️')
                });
                
            }else if(commandName === "movedown"){
                movePlayer(message, true, -1);
                message.channel.send(printMap(maps)).then(sentMessage => {
                    sentMessage.react('⬅️'),
                    sentMessage.react('⬆️'),
                    sentMessage.react('⬇️'),
                    sentMessage.react('➡️')
                });

            }else if(commandName === "moveleft"){
                movePlayer(message, false, -1);
                message.channel.send(printMap(maps)).then(sentMessage => {
                    sentMessage.react('⬅️'),
                    sentMessage.react('⬆️'),
                    sentMessage.react('⬇️'),
                    sentMessage.react('➡️')
                });
            }else if(commandName === "moveright"){
                movePlayer(message, false, 1);
                message.channel.send(printMap(maps)).then(sentMessage => {
                    sentMessage.react('⬅️'),
                    sentMessage.react('⬆️'),
                    sentMessage.react('⬇️'),
                    sentMessage.react('➡️')
                });
            }else{
                commands[commandName].callback(message, args, maps);
            }
            
        } catch (error){
            console.error(error);
        }
    })

    

}