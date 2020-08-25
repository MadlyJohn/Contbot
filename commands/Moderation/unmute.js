const db = require("quick.db")
const Discord = require('discord.js')


module.exports = {
    name: "unmute",
    category: "Moderation",
    description: "Unmute a muted user",
    usage: "unmute <user mention>",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have the permission to use this command.');

        const user = message.mentions.members.first();
        if (!user) return message.channel.send('```.umute <member> \n \n A member must be mentioned.```');

        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"

        let Muted = db.fetch(`mRole_${message.guild.id}`);
        let Mute = await message.guild.roles.cache.get(Muted);


        if (user.roles.cache.get(Mute)) return message.channel.send(`${user.user.tag} was unmuted`);

        await user.roles.remove(Mute).catch(err => message.channel.send(`Something went wrong: ${err}`));
        await message.channel.send(`${user.user.tag} was unmuted.`);

        const logs = new Discord.MessageEmbed()
        .setAuthor(user.user.tag , user.user.avatarURL()) 
          .setDescription(`**UNMUTED**\n**Reason** ${reason}\n**Moderator** ${message.author} `)
          .setColor('RANDOM')
          .setTimestamp()
          .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));


    let logc = await db.fetch(`lChannel_${message.guild.id}`);
    if (logc === null) return;
    let log = message.guild.channels.cache.get(logc);
    log.send(logs);
    }
}