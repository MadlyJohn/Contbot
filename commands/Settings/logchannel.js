const db = require("quick.db")


module.exports = {
    name: "setlogchannel",
    aliases: ["setlog", "logchannel"],
    description: "set a logging channel",

    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`You don't have the permission to use this command.`);
        if (!args[0]) {
            message.channel.send('```.setlog <channel> \n \nPlease mention the channel you would like to log commands```')
        }


         let Channel = message.mentions.channels.first() || message.guild.channels.cache.find(c => c.name == args.join(' '));
        if (!Channel) return;

        db.set(`lChannel_${message.guild.id}`, `${Channel.id}`)
        message.channel.send(`**Successfully Updated log Channel Channel To ${Channel.toString()}**`)
    }
}



