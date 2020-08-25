const Discord = require('discord.js')

module.exports = {
    name: "invite",
    description: "Invite the bot",

    async run (client, message, args) {

        message.channel.send("Invite the bot here : https://discord.com/oauth2/authorize?client_id=737461888023003196&scope=bot&permissions=2146958847");


    }
}    