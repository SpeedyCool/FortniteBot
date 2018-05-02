const Discord = require('discord.js');
const client = new Discord.Client();

const request = require('request');

let token = process.env.TOKEN;

client.on('ready', ()=>{

    console.log('READY !');

})

let playerName;

client.on('message', (message)=>{

    let args = message.content.split(' ');

    if(message.content.startsWith('!ft')){
        if(args.length < 2){
            let embed = new Discord.RichEmbed()
                .setTitle('Fortnite Bot')
                .setColor('red')
                .addField('!ft {player}');
            message.channel.sendEmbed(embed);
        }else if(args.length == 3){
            if(args[2] == "ps4"){
                playerName = args[1];
                
                let options = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${playerName}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': "rD2TIe9QaawRVNW0WtAN"
                    }
                }
    
                request(options, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        let stats = JSON.parse(body);
                        let embed = new Discord.RichEmbed()
                        .setTitle(playerName)
                        .setColor('#26d941')
                        .setAuthor("Fortnite Bot")
                        .setThumbnail("https://image.noelshack.com/fichiers/2018/16/3/1524076593-images.jpg")
                        .addField('Nombre de Game', stats.br.stats.ps4.all.matchesPlayed, true)
                        .addField('Nombre de Win', stats.br.stats.ps4.all.wins, true)
                        .addField('Winrate', stats.br.stats.ps4.all.winRate, true)
                        .addField('Nombre de Kills', stats.br.stats.ps4.all.kills, true)
                        .addField('Nombre de Morts', stats.br.stats.ps4.all.deaths, true)
                        .addField('KDA', stats.br.stats.ps4.all.kpd, true)
                        .addField('Temps de jeu', stats.br.stats.ps4.all.minutesPlayed / 60 + 'h', true)
                        message.channel.sendEmbed(embed);

                        if(stats.br.stats.ps4.all.kpd < 1){
                            message.channel.sendMessage('Augmente ton nombre de kills sans mourir gros noob !');
                        }else if (stats.br.stats.ps4.all.kpd > 1){
                            message.channel.sendMessage('C\'est OK !');
                        }
                    }
                })
            }
            else if(args[2] == "xbox"){
                playerName = args[1];
                
                let options = {
                    method: "GET",
                    url: `https://fortnite.y3n.co/v2/player/${playerName}`,
                    headers: {
                      'User-Agent': 'nodejs request',
                      'X-Key': "rD2TIe9QaawRVNW0WtAN"
                    }
                }
    
                request(options, (error, response, body) => {
                    if (!error && response.statusCode == 200) {
                        let stats = JSON.parse(body);
                        let embed = new Discord.RichEmbed()
                        .setTitle(playerName)
                        .setColor('#26d941')
                        .setAuthor("Fortnite Bot")
                        .setThumbnail("https://image.noelshack.com/fichiers/2018/16/3/1524076593-images.jpg")
                        .addField('Nombre de Game', stats.br.stats.xbox.all.matchesPlayed, true)
                        .addField('Nombre de Win', stats.br.stats.xbox.all.wins, true)
                        .addField('Winrate', stats.br.stats.xbox.all.winRate, true)
                        .addField('Nombre de Kills', stats.br.stats.xbox.all.kills, true)
                        .addField('Nombre de Morts', stats.br.stats.xbox.all.deaths, true)
                        .addField('KDA', stats.br.stats.xbox.all.kpd, true)
                        .addField('Temps de jeu', stats.br.stats.xbox.all.minutesPlayed / 60 + 'h', true)
                        message.channel.sendEmbed(embed);

                        if(stats.br.stats.xbox.all.kpd < 1){
                            message.channel.sendMessage('Augmente ton nombre de kills sans mourir gros noob !');
                        }else if (stats.br.stats.xbox.all.kpd > 1){
                            message.channel.sendMessage('C\'est OK !');
                        }
                    }
                })
            }

        }else{
            

            let options = {
                method: "GET",
                url: `https://fortnite.y3n.co/v2/player/${playerName}`,
                headers: {
                  'User-Agent': 'nodejs request',
                  'X-Key': "rD2TIe9QaawRVNW0WtAN"
                }
            }

            request(options, (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    let stats = JSON.parse(body);
                    let embed = new Discord.RichEmbed()
                        .setTitle(playerName)
                        .setColor('#26d941')
                        .setAuthor("Fortnite Bot")
                        .setThumbnail("https://image.noelshack.com/fichiers/2018/16/3/1524076593-images.jpg")
                        .addField('Nombre de Game', stats.br.stats.pc.all.matchesPlayed, true)
                        .addField('Nombre de Win', stats.br.stats.pc.all.wins, true)
                        .addField('Winrate', stats.br.stats.pc.all.winRate, true)
                        .addField('Nombre de Kills', stats.br.stats.pc.all.kills, true)
                        .addField('Nombre de Morts', stats.br.stats.pc.all.deaths, true)
                        .addField('KDA', stats.br.stats.pc.all.kpd, true)
                        .addField('Temps de jeu', stats.br.stats.pc.all.minutesPlayed / 60 + 'h', true)
                    message.channel.sendEmbed(embed);

                    if(stats.br.stats.pc.all.kpd < 1){
                        message.channel.sendMessage('Augmente ton nombre de kills sans mourir gros noob !');
                    }else if (stats.br.stats.pc.all.kpd > 1){
                        message.channel.sendMessage('C\'est OK !');
                    }
                }
            })
        }
        
    }

})
    

client.login(token);
