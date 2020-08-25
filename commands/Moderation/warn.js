  
const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "warn",
  category: "moderation",
  usage: "warn <@mention> <reason>",
  description: "Warn anyone who do not obey the rules",
  run: async (client, message, args) => {
    
    if(!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("You should have admin perms to use this command!")
    }
    
    const user = message.mentions.members.first()
    
    if(!user) {
      return message.channel.send("```.warn <user> [reason] \n\nPlease mention use valid member```")
    }
    
    if(message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots")
    }
    
    if(message.author.id === user.id) {
      return message.channel.send("You can not warn yourself")
    }
    
    if(user.id === message.guild.owner.id) {
      return message.channel.send("You jerk, how you can warn server owner -_-")
    }

    const noperms = new MessageEmbed()
    .setDescription(`You cannot warn this member due to them have priority over you`)
    .setColor('RED')


if (user.roles.highest.rawPosition >= message.member.roles.highest.rawPosition) {
    return message.channel.send(noperms)
}
    
let reason = args.slice(2).join(" ")
if(!reason) reason = "No reason given!"

        
    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`)
    
    if(warnings === 3) {
      return message.channel.send(`${message.mentions.users.first().username} already reached his/her limit with 3 warnings`)
    }
    
    if(warnings === null) {
      db.set(`warnings_${message.guild.id}_${user.id}`, 1)
      user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    } else if(warnings !== null) {
        db.add(`warnings_${message.guild.id}_${user.id}`, 1)
       user.send(`You have been warned in **${message.guild.name}** for ${reason}`)
      await message.channel.send(`You warned **${message.mentions.users.first().username}** for ${reason}`)
    }

    const logs = new MessageEmbed()
    .setAuthor(user.user.tag , user.user.avatarURL()) 
      .setDescription(`**WARNED**\n**Reason** ${reason}\n**Moderator** ${message.author} `)
      .setColor('RANDOM')
      .setTimestamp()
      .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));

    let logc = await db.fetch(`lChannel_${message.guild.id}`);
    if (logc === null) return;
    let log = message.guild.channels.cache.get(logc);
    log.send(logs);


  }
}