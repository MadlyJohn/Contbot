const db = require("quick.db")
const Discord = require("discord.js")


module.exports = {
    name: "disable",
    description: "disable settings",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) {
        return message.channel.send('You don\'t have the permission to use this command.')

        }   

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setDescription("Setting you can disable are `mutedrole` `logchannel` `welcomechannel` `welcomemessage`")
        .setTimestamp()
        .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));


        if(!args[0]) return message.channel.send(embed)



        if (args[0] == "mutedrole") {
            message.channel.send(`**Disabled Muted-Role**`)
         db.delete(`mRole_${message.guild.id}`);
        }

        if (args[0] == "logchannel") {
            message.channel.send("**Disabled Log-Channel**")
            db.delete(`lChannel_${message.guild.id}`);
        }

        if (args[0] == "welcomechannel") {
            message.channel.send("**Disabled Welcome-Channel**")
            db.delete(`welchannel_${message.guild.id}`);
        }

        if (args[0] == "welcomemessage") {
            message.channel.send("**Disabled Welcome-Message**")
            db.delete(`welmessage_${message.guild.id}`)
        }





    }
}