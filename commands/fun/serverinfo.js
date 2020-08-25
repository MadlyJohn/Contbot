
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports = {
    name: "serverinfo",
    category: "general",
    description: "Server infomation",
    usage: "#serverinfo",
    run: async (bot, message, args) => {
        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
            .setTitle(`Server info for "${name}"`)
            .setThumbnail(icon)
            .addFields(
                {
                    name: 'Region',
                    value: region,
                },
                {
                    name: 'Members',
                    value: memberCount,
                },
                {
                    name: 'Owner',
                    value: owner.user.tag,
                }
            )

        message.channel.send(embed)
    }
}