const db = require("quick.db")


module.exports = {
    name: "setmutedrole",
    description: "set muted role",
    aliases: ["muterole", "setmuterole"],
    run: async (client, message, args) => {
        if (!message.member.hasPermission('MANAGE_GUILD')) {
        return message.channel.send('You don\'t have the permission to use this command.')
        }   


        const role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.name == args.join(' '));

        if (!role) {
            return message.channel.send("```.setmutedrole <role> \n \nPlease mention the role or type the name of it```")
        }

        db.set(`mRole_${message.guild.id}`, `${role.id}`)
        message.channel.send(`**Successfully Updated Muted Role To ${role.name}**`)


    }
}