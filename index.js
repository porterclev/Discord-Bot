//Constants
const { Client, Intents, MessageEmbed } = require('discord.js');
require('dotenv').config();

const ytdl = require('ytdl-core');
const fs = require('fs');
const voice = require('@discordjs/voice');
const { join } = require('path');

const bot = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES, 
    Intents.FLAGS.GUILD_VOICE_STATES
]});

//Start up
bot.on('ready', async () =>{
    console.log('This bot is online!');
    let handler = require('./command-handler.js');
    if(handler.default){
        handler = handler.default;
    }

    handler(bot);

});

/*
//Commands
bot.on('messageCreate', async message => {

    //Playlist
    if(message.content.toLowerCase() === ".play free roam"){
        const songList = [19];
        let count = 0;
        for(let i = 0; i < 19; i++){
            count = 0;
            let songDir = "Media/song" + Math.round((Math.random() * 20) + 1) + ".mp3";
            for(let j = 0; j < 19; j++){
                if(songList[j] === songDir){
                    count++;
                }
            }

            if(count === 0){
                songList[i] = songDir;
            }else{
                i--;
            }
        }

        const audioplayer = voice.createAudioPlayer();
        let path = 0;
        voice.joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator
        }).subscribe(audioplayer);
        let resource = voice.createAudioResource(songList[path]);
        audioplayer.play(resource);
        

        audioplayer.on(voice.AudioPlayerStatus.Idle, () => {
            if(path < 19){
                path++;
                resource = voice.createAudioResource(songList[path]);
                audioplayer.play(resource);
            }else{
                console.log("Playlist finished");
                audioplayer.stop();
            }
        })

        if(message.content === '.pause'){
            audioplayer.pause();
        }

        if(message.content === '.resume'){
            audioplayer.unpause();
        }

        if(message.content === '.skip'){
            path++;
            resource = voice.createAudioResource(songList[path]);
            audioplayer.play(resource);
        }
    }

    //Interactions with humans
    function sendMessageRandomly(userMessage, botMessage, chance){
        if(message.content === userMessage){
            var number = Math.round(Math.random() * (chance - 1) + 1);
            console.log(userMessage + " roll: " + number);
    
            if(number === 1){
                message.channel.send(botMessage);
            }
        }
    };
    
    sendMessageRandomly("^", "^^", 3);
    
    //General 
    if (message.channel.id === ('545860292093935618') || message.channel.id === ('722063668543750170') || message.channel.id === ('744121567356780565') && message.author.id !== ('714413389627260939')){
        var hateNum = Math.floor(Math.random() * ((150 - 1) + 1) + 1);
        console.log("Random Hate Message Roll: " + hateNum);

         if(hateNum === 1){ 
            console.log('sent hate');
            message.channel.send("I fucking hate this kid");

         }else if(hateNum === 150){
            console.log('sent nice one');
            message.channel.send("nice one");

         }else if(hateNum === 75){
            console.log('sent retard');
            message.channel.send("retard");

         }else if(hateNum === 25){
            console.log('sent beaner');
            message.channel.send("beaner");

         }else if(hateNum === 105){
            console.log('sent Black');
            message.channel.send("blackie");

         }
    }

    //Lekohan Reacts

    //Dexter's Domain
    if(message.channel.id == '744121567356780565')  {
        if (message.attachments.size > 0){
            console.log('attachment found');
            if (Math.round(Math.random() * 5) === 1){
                console.log('number rolled 1');
                 message.react('759082919640825868');    
            }
        }
    }

    //Collection
    else if(message.channel.id == '678891330016903169') {
        if(message.attachments.size > 0){
            console.log('attachment found');
            if (Math.round(Math.random() * 10) === 1){
                console.log('number rolled 1');
                message.react('759082919640825868');    
            }
        }
    }
    //Unworthy
    else if(message.channel.id == '705681603522723840'){
        if(message.attachments.size > 0){
            console.log('attachment found');
            if (Math.round(Math.random() * 25) === 1){
                console.log('number rolled 1');
                message.react('759082919640825868');    
            }
        }
    }

    //Lekohan Commands for Overseer and Yertle
    if(message.member.roles.cache.some(role => role.name === 'YERTLE' || role.name === 'OVERSEER')){
        
        //Discord Profile Picture Stealer
        if(message.content.startsWith(".steal") === true){
            var target = message.mentions.users.first();
            console.log(target);
            console.log(message.member);
        
        
            let embed = new MessageEmbed()
            .setTitle(target.username)
            .setImage(message.mentions.users.first().avatarURL())
        
            message.channel.send({embeds: [embed]});
        }

        if(message.content === '.commands'){

            let embed = new MessageEmbed()
            .setTitle('Commands')
            .setDescription('.invade\n.bye\n.die\ncringe\n.zombie\n.mom\n.laugh\n.jacob\n.leave')
            .setImage('https://i.imgur.com/RO9gl4g.png')
            .setFooter('Do not let these fall into the wrong hands')

            message.channel.send({embeds: [embed]});
        } 

        //Lekohan's Voice
        if (message.author.id === ('259847819353915392') || message.author.id === ('600380478125768724') || message.author.id === ('290634129060528138') || message.author.id === ('447237271998169092')){
            function playAudio(path){
                const audioplayer = voice.createAudioPlayer();
                voice.joinVoiceChannel({
                    channelId: message.member.voice.channel.id,
                    guildId: message.guild.id,
                    adapterCreator: message.guild.voiceAdapterCreator
                }).subscribe(audioplayer);
                let resource = voice.createAudioResource(path);
                audioplayer.play(resource);

            }
        }
    }
    
})  
*/

bot.login(process.env.TOKEN);
