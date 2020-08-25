
const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcomemessage",
  category: "moderation",
  aliases: ["welcomemessage"],
  description: "Set the welcome channel",
  run: (client, message, args) => {
    if ((!message.member.hasPermission("MANAGE_GUILD"))) return message.channel.send(`You do not have permissions to use this command!`);



    let wlcmmessage = args.slice(0).join(" ")


    if(!wlcmmessage) {
        return message.channel.send("```#setwelcomemessage [message]\n\nPlease enter a welcome message")
    }
    

    
     
      db.set(`welmessage_${message.guild.id}`, `${wlcmmessage}`)
    
    message.channel.send(`**Welcome Message is set as ${wlcmmessage}**`)
  }
}