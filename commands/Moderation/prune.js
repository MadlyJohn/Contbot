module.exports = {
    name: "prune",
    category: "Moderation",
    description: "Delete messgaes",
    usage: "prune <number>",
    run: async (bot, message, args) => {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You don\'t have the permission to use this command.');

        if (isNaN(args[0])) return message.channel.send("Please input a valid number.") // isNaN = is Not a Number. (case sensitive, write it right)

        if (args[0] > 100) return message.channel.send("Insert the number less than 100.") // Discord limited purge number into 100.
        if (args[0] < 2) return message.channel.send("Insert the number more than 1.")

        message.delete()
        message.channel.bulkDelete(args[0])
            .then(messages => message.channel.send(`Deleted ${messages.size}/${args[0]} messages.`)).then(d => d.delete({ timeout: 10000 })) // How long this message will be deleted (in ms)
            .catch(() => message.channel.send("Something went wrong, while deleting messages.")) // This error will be displayed when the bot doesn't have an access to do it.
    }


}

