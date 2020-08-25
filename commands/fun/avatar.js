const Discord = require("discord.js");
const client = new Discord.Client();




module.exports = {
    name: "avatar",
    category: "Fun",
    description: "Check someones profile",
    usage: "#profile <user>",
    run: async (bot, message, args) => {
        let user;

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });
        // 4096 is the new biggest size of the avatar.
        // Enabling the dynamic, when the user avatar was animated/GIF, it will result as a GIF format.
        // If it's not animated, it will result as a normal image format.

        const embed = new Discord.MessageEmbed()
            .setTitle(`${user.tag} avatar`)
            .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
            .setColor(0x1d1d1d)
            .setImage(avatar)

        return message.channel.send(embed);
    }
}