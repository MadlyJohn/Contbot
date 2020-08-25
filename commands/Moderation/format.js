const Discord = require("discord.js");
const client = new Discord.Client();

module.exports = {
    name: "format",
    category: "Moderation",
    description: "Shows how to use every command",
    usage: "#format",
    run: async (bot, message, args) => {
        const embed = new Discord.MessageEmbed()
            .setAuthor(`Formats`)
            .setDescription('**How to format every command**')
            .addFields({ name: 'Moderation', value: '`kick` → `ban <member> <reason>`\n `ban` → `ban <member> <reason>` \n `unban` → `unban <user id>` \n `mute` → `mute <user> <time>` \n `unmute` → `unmute <user>` \n `speak` → `speak <channel> <role> <T/N/F> ` \n `prune` → `prune <number>`' })
            .addFields({ name: 'Fun', value: '`poll` → `poll <channel> <question>` \n `giveaway` → `giveaway <channel> <time> <winners> <prize>`' })
            .setColor('#ff0000')

        message.channel.send(embed);

    }
}