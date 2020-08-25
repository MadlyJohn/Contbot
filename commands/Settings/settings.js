
const Discord = require('discord.js');
const db = require("quick.db");



module.exports = {
    name: "settings",
    description: "view settings",
    run: async (bot, message, args) => {
    if (!(message.member.hasPermission("MANAGE_GUILD"))) return message.channel.send(`:no_entry:  U Dont Have Permissions!`);

    const yes = bot.emojis.cache.get("569290398908940318")
    const nope = bot.emojis.cache.get("569290399194284064")

    const logID = await db.fetch(`lChannel_${message.guild.id}`)
    const lChannel = message.guild.channels.cache.get(logID)
    const lcStr = lChannel ? `✅ - ${lChannel.toString()}` : `❌ - Not setup if you would like to set up a log channel use this command: \`#setlogchannel <channel>\` `

    const welcomeID = await db.fetch(`welchannel_${message.guild.id}`)
    const welchannel = message.guild.channels.cache.get(welcomeID)
    const wcStr = welchannel ? `✅ - ${welchannel.toString()}` : `❌ - Not setup if you would like to set up a welcome channel use this command: \`#setwelcomechannel <channel>\` `

    const mutedID = await db.fetch(`mRole_${message.guild.id}`)
    const muteRole = message.guild.roles.cache.get(mutedID)
    const mrStr = muteRole ? `✅ - ${muteRole.toString()}` : `❌ - Not setup if you would like to set up a mute role use this command: \`#setmutedrole <role name / @mention>\``

    let msg = db.get(`welmessage_${message.guild.id}`)
    const welmsg = msg ? `✅ - ${msg.toString()}` : `❌ - Not setup if you would like to set up a welcome messgae use this command: \`#setwelcomemessage [message]\``

    const embed = new Discord.MessageEmbed()
         .setTitle('**Settings**')
        .setColor("#29dacf")
        .setDescription('**If you would like to disable settings type `#disable <setting>`**')
        .addField('Log Channel', lcStr, true)
        .addField('Welcome Channel', wcStr, true)
        .addField('Muted Role', mrStr, true)
        .addField('Welcome Message', welmsg)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} (STAFF)`, message.author.displayAvatarURL({ dynamic: true }));

    message.channel.send(embed)


}
}
