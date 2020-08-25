const Discord = require('discord.js');
const ms = require('ms');
const db = require("quick.db")

module.exports = {
    name: "mute",
    category: "Moderation",
    description: "Mutes a member",
    usage: "mute <member> <time> <reason>",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have permission to use this command")
        var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
        if (!member) return message.channel.send('```.mute <member> <time> [reason] \n \n A member must be mentioned.```')

        let Muted = await db.fetch(`mRole_${message.guild.id}`);

        let Mute = await message.guild.roles.cache.get(Muted);

        const Noset = new Discord.MessageEmbed()
        .setDescription('You do not have a mute role set if you would like to set it please checking your settings')
        .setColor('RED')

        if (!Mute) return message.channel.send(Noset)

        let time = args[1];
        if (!time) {
            return message.channel.send('```.mute <member> <time> [reason] \n \n Duration of the mute is required.```');
        }


        let reason = args.slice(2).join(" ")
        if(!reason) reason = "No reason given!"
        
        
        const nopermss = new Discord.MessageEmbed()
            .setDescription(`You cannot mute this member due to them have priority over you`)
            .setColor('RED')


        if (member.roles.highest.rawPosition >= message.member.roles.highest.rawPosition) {
            return message.channel.send(nopermss)
        }


        const noperms = new Discord.MessageEmbed()
            .setDescription(`Muted role is above my highest role therefore I can not hand it out`)
            .setColor('RED')


        if (Mute.rawPosition >= message.guild.me.roles.highest.rawPosition) {
            return message.channel.send(noperms)
        }



        member.roles.add(Mute);

        message.channel.send(`**${member.user.tag}** has now been muted for ${ms(ms(time))}`)

        setTimeout(function () {
            member.roles.remove(Mute);
        }, ms(time));




        const logs = new Discord.MessageEmbed()
        .setAuthor(member.user.tag , member.user.avatarURL()) 
          .setDescription(`**MUTED**\n**Reason** ${reason}\n**Time** ${time}\n**Moderator** ${message.author} `)
          .setColor('RANDOM')
          .setTimestamp()
          .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));

            let logc = await db.fetch(`lChannel_${message.guild.id}`);
            if(logc === null) return;
            let log = message.guild.channels.cache.get(logc);
              log.send(logs);



        const embed = new Discord.MessageEmbed()
            .setTitle('You were muted!')
            .addField('Expires:', time, true)
            .addField('Reason:', reason, true);

        try {
            member.send(embed);
        } catch (err) {
            console.warn(err);
        }
    }
}
