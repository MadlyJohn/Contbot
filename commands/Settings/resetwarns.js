  
const db = require("quick.db")
const Discord = require('discord.js')

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "resetwarnings"],
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    
    
    if(!message.member.hasPermission("MANAGE_MESSAGES")) {
      return message.channel.send("You should have admin perms to use this command")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
    return message.channel.send("```.resetwarnings <user>\n\nPlease mention a valid user```")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings")
    }
    
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} does not have any warnings`)
    }
    
    db.delete(`warnings_${message.guild.id}_${user.id}`)
    user.send(`Your all warnings are reseted by ${message.author.username} from ${message.guild.name}`)
    await message.channel.send(`Reseted all warnings of ${message.mentions.users.first().username}`)


    const logs = new Discord.MessageEmbed()
    .setAuthor(user.user.tag , user.user.avatarURL()) 
      .setDescription(`**WARNINGS RESET**\n**Moderator** ${message.author} `)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));


let logc = await db.fetch(`lChannel_${message.guild.id}`);
if (logc === null) return;
let log = message.guild.channels.cache.get(logc);
log.send(logs);
    
  
    
}
}