  
const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "speak",
    category: "Moderation",
    description: "Grant a role talk permissions in a channel",
    usage: "speak <channel> <role> <F / N / T (False, Null, True",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send("You do not have permission to do this command") 
        }

          const channel =
            message.mentions.channels.first() ||
            message.guild.channels.cache.get(args[0]);
          if (!channel) {
            return message.channel.send(
              '```.speak <channel> <role> <f/n/t> \n \n Must mention a channel```'
            );
          }
      
          const role = message.guild.roles.cache.find(r => r.name === args[1]) ||
           message.mentions.roles.first();
      
          if (!role) {
            return message.channel.send('```.speak <channel> <role> <f/n/t> \n \n Must mention a role or provide role name```')
          }
      
      
      
      
      
          if (args[2] === 'f') {
            channel.createOverwrite(role, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: false


            });
          } else if (args[2] === 't') {
            channel.createOverwrite(role, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: true

            });
          } else if (args[2] === 'n') {
            channel.createOverwrite(role, {
              VIEW_CHANNEL: true,
              SEND_MESSAGES: null
              
              
            });
          } else {
            return message.channel.send("Please provide a valid permission f = false t = true n = null")
          }
          message.channel.send(`${role.name} permissions to speak in ${channel} has been changed`) 


          const logs = new MessageEmbed()
          .setAuthor(message.author.username , message.author.avatarURL()) 
            .setDescription(`**SPEAK**\n**Channel** ${channel}\n**Role** ${role}\n**Set to** ${args[2]}\n **Moderator** ${message.author} `)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));
  
              let logc = await db.fetch(`lChannel_${message.guild.id}`);
              if(logc === null) return;
              let log = message.guild.channels.cache.get(logc);
                log.send(logs);

          
      
    },
};

