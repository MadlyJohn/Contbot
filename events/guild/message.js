module.exports = async (bot, message) => {
    const prefix = ".";

    // If the message was sent by a bot, doesn't start with the prefix, or wasn't in a guild, return
    if (
        message.author.bot ||
        !message.content.startsWith(prefix) ||
        !message.guild
    )
        return;
    // If there is no message member, fetch the member
    if (!message.member)
        message.member = await message.guild.fetchMember(message);

    // Variables
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    let command = bot.commands.get(cmd);

    // Makes aliases work, don't remove
    if (!command || !command.run)
        command = bot.commands.get(bot.aliases.get(cmd));

    command.run(bot, message, args);
};
