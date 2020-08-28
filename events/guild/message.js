const Discord = require("discord.js"), cooldowns = new Discord.Collection();

module.exports = async (client, message) => {
    if (message.author.bot || message.author === client.user) return;

    let prefix = "."



    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let msg = message.content.toLowerCase();
    let cmd = args.shift().toLowerCase();
    let sender = message.author;

    message.flags = []
    while (args[0] && args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
    }
    
    let commandFile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!commandFile) return;
    
   
    try {
        if (!commandFile) return;
        commandFile.run(client, message, args);
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log(`${sender.tag} (${sender.id}) ran a command: ${cmd}`);
    }
}
