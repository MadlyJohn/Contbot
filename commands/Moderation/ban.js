const { MessageEmbed } = require("discord.js");
const db = require("quick.db")

module.exports = {
    name: "ban",
    category: "Moderation",
    description: "Ban a user",
    usage: "ban <user mention> [reason]",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You don\'t have the permission to use this command.');



        const user = message.mentions.members.first();
        if (!user) return message.channel.send('```.ban <member> [reason] \n \n A member must be mentioned. ```');


        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason given!"
        
        const noperms = new MessageEmbed()
            .setDescription(`You cannot ban this member due to them have priority over you`)
            .setColor('RED')


        if (user.roles.highest.rawPosition >= message.member.roles.highest.rawPosition) {
            return message.channel.send(noperms)
        }


        await user.ban()
            .then(() => message.channel.send(`${user.user.tag} has been banned.`));





        const logs = new MessageEmbed()
            .setAuthor(user.user.tag, user.user.avatarURL())
            .setDescription(`**BANNED**\n**Reason** ${reason}\n**Moderator** ${message.author} `)
            .setColor('RANDOM')
            .setTimestamp()
            .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));

        let logc = await db.fetch(`lChannel_${message.guild.id}`);
        if (logc === null) return;
        let log = message.guild.channels.cache.get(logc);
        log.send(logs);
    }

}





