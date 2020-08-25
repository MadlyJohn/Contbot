const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: "poll",
    category: "Fun",
    description: "Set up a poll",
    usage: "poll <channel> <question>",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have the permission to use this command.');
       
        let pollChannel = message.mentions.channels.first();
        let pollDescription = args.slice(1).join(' ');
        
        if(!pollChannel) return message.channel.send("```.poll <channel> [Question] \n \n Channel must be mentioned```") 

        if(!pollDescription) return message.channel.send("```.poll <channel> [Question] \n \n Question must be provided```") 
    
  
      

        let embedPoll = new Discord.MessageEmbed()
            .setTitle('😲 New Poll! 😲')
            .setDescription(pollDescription)
            .setColor('YELLOW')
        let msgEmbed = await pollChannel.send(embedPoll)
        await msgEmbed.react('👍')
        await msgEmbed.react('👎')
        
    }

}
