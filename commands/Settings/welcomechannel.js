
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcomechannel",
  category: "moderation",
  usage: "setwelcome <#channel>",
  aliases: ["setwelcome", "welcomechannel"],
  description: "Set the welcome channel",
  run: (client, message, args) => {
    if ((!message.member.hasPermission("MANAGE_GUILD"))) return message.channel.send(`You do not have permissions to use this command!`);

    
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`**Welcome Channel is set as ${channel}**`)
  }
}