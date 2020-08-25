const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "shutdown",
    category: "kill da bot",
    run: async (client, message, args) => {
        if (message.author.id !== '378269290471620608') {
            return message.channel.send("**This command is only allowed to be use by the bot owner**")
        }


        await message.channel.send(`**Shutting down...**`);
        client.destroy();
        process.exit(0);
    }
}