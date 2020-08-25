const Discord = require("discord.js");
const client = new Discord.Client();



module.exports = {
    name: "commands",
    category: "Moderation",
    description: "Shows how to use command",
    usage: "#help",
    run: async (bot, message, args) => {
        console.log("test")

        const embed = new Discord.MessageEmbed()
            .setTitle(`**ContenialsBot commands**`)
            .setDescription('Here are all the command that are currently avaliable with this bot\n If you would like to know how to use a command `.help <command>`')
            .addFields({ name: 'Moderation', value: 'ban\nkick\nunban\nwarn\nresetwarns\nwarnings\nmute\nunmute\nprune\nspeak\nsettings\ndisable\nrole', inline: true})
            .addFields({ name: 'General', value: 'serverinfo\nping\navatar\nuserinfo\nbotinfo', inline: true })
            .addFields({ name: 'Fun', value: 'poll\ngiveaway', inline: true})
            .addFields({ name: 'Prefix', value: '```.```', inline: true })
            .setColor('#ff0000')

            message.channel.send(embed);
    }
}
