const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: "role",
    description: "add a role",
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send('You don\'t have the permission to use this command.');

        const user = message.mentions.members.first();
        if (!user) return message.channel.send('```.role <member> <role> \n \n A member must be mentioned. ```');



        const roleName = args.slice(1).join(' ');
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        })

        const tbhh = new Discord.MessageEmbed()
            .setDescription(`There is no role with the name "${roleName}"`)
            .setColor('RED')


        if (!role) {
            message.channel.send(tbhh)
            return
        }



        const noperms = new Discord.MessageEmbed()
            .setDescription(`The role ${role} is above my highest role meaning I cannot hand it out.`)
            .setColor('RED')


        if (role.rawPosition >= message.guild.me.roles.highest.rawPosition) {
            return message.channel.send(noperms)
        }

        const idkman = new Discord.MessageEmbed()
            .setDescription(`You are not able to grant this role because it is higher then your highest role ask someone above the role to be grant it`)
            .setColor('RED')

        if (role.rawPosition >= message.member.roles.highest.rawPosition) {
            if (message.guild.ownerID !== message.author.id) return message.channel.send(idkman)
        }



        const hasrole = new Discord.MessageEmbed()
            .setDescription(` Removed ${role} from **${user.user.username}**`)
            .setFooter(`Role removed by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('RED')



        if (user.roles.cache.has(role.id)) return message.channel.send(hasrole)
            .then(user.roles.remove(role))





        const embed = new Discord.MessageEmbed()
            .setDescription(`Successfully added **${role.name}** role to **${user.user.username}**`)
            .setFooter(`Role added by ${message.author.username}`, message.author.displayAvatarURL({ dynamic: true }))
            .setColor('GREEN')




        user.roles.add(role)
            .then(member => message.channel.send(embed))

            const logs = new Discord.MessageEmbed()
            .setAuthor(message.author.username , message.author.avatarURL()) 
              .setDescription(`**ROLE ADDED**\n**Role added** ${role}\n**Moderator** ${message.author} `)
              .setColor('RANDOM')
              .setTimestamp()
              .setFooter(`${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));
    
                let logc = await db.fetch(`lChannel_${message.guild.id}`);
                if(logc === null) return;
                let log = message.guild.channels.cache.get(logc);
                  log.send(logs);




    }

}
