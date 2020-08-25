
const Discord = require('discord.js');
const db = require("quick.db")
module.exports = {
    name: 'unban',
    run: async (client, message, args) => {
        if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send("You dont have permission to perform this command!")
        if (isNaN(args[0])) return message.channel.send("You need to provide an ID.")
        let bannedMember = await client.users.fetch(args[0])
        if (!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

        let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reason given!"




        if (!message.guild.me.hasPermission(["BAN_MEMBERS"])) return message.channel.send("I dont have permission to perform this command!") |
            message.guild.members.unban(bannedMember, reason)
        await message.channel.send(`**${bannedMember.tag}** has been unbanned from the guild!`)

        message.guild.members.unban(bannedMember, reason)

        const logs = new Discord.MessageEmbed()
            .setAuthor(bannedMember.tag, bannedMember.displayAvatarURL)
            .setDescription(`**UNBANNED**\n**Reason** ${reason}\n**Moderator** ${message.author} `)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));

        let logc = await db.fetch(`lChannel_${message.guild.id}`);
        if (logc === null) return;
        let log = message.guild.channels.cache.get(logc);
        log.send(logs);
    }
}