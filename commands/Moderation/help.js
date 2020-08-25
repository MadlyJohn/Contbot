const Discord = require("discord.js");
const client = new Discord.Client();



module.exports = {
    name: "help",
    category: "Moderation",
    description: "Shows how to use command",
    usage: "#help",
    run: async (bot, message, args) => {

        const embed = new Discord.MessageEmbed()
            .setTitle(`❓ Help menu`)
            .setDescription('A list of commands can displayed by saying `.commands` \n\n**❯ For more detailed information about usage use the following command:**\n`.help <command>` \n\n**❯ Support Server Inivte** \n https://discord.gg/knrqhnD \n\n**❯ Bot Invite** \n https://discord.com/oauth2/authorize?client_id=737461888023003196&scope=bot&permissions=2146958847\n\n**❯ Bot Creator**\nMadlyJohn#8630')
            .setColor('RANDOM')

        if (!args[0]) return message.channel.send(embed)

        const ban = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Bans a user if they are in the server\n**Usage:** `.ban @user [reason] `\n**Example:** `.ban @MadlyJohn Raiding my server `")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')

        if (args[0] == "ban") {
            message.channel.send(ban)
        }

        const kick = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Kicks a user if they are in the server\n**Usage:** `.kick @user [reason] `\n**Example:** `.kick @MadlyJohn Raiding my server `")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')

        if(args[0] == 'kick') {
            message.channel.send(kick)
        }

        const unban = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("unban a user who is banned with there id\n**Usage:** `.unban @user.id [reason] `\n**Example:** `.unban 553934935749345 Appealed`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')

        if(args[0] == 'unban') {
            message.channel.send(unban)
        }

        const warn = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("warn a user for breaking the rules\n**Usage:** `.warn @user [reason] `\n**Example:** `.warn @MadlyJohn Breaking rules`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')

        if(args[0] == 'warn') {
            message.channel.send(warn)
        }

        const resetwarnings = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Reset a users warnings \n**Usage:** `.resetwarns @user`\n**Example:** `.resetwarn @MadlyJohn`")
        .addFields({name : 'Aliases', value: 'rwarns, resetwarnings'})
        .setColor('RANDOM')


        if(args[0] == 'resetwarns') {
            message.channel.send(resetwarnings)  
        }

        const warnings = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("View a users warnings \n**Usage:** `.warnings @user`\n**Example:** `.warnings @MadlyJohn`")
        .addFields({name : 'Aliases', value: 'warns'})
        .setColor('RANDOM')

        if(args[0] == 'warnings') {
            message.channel.send(warnings)
        }

        const mute = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Mute a user for breaking rules \n**Usage:** `.mute @user <time> [reason]`\n**Example:** `.mute @MadlyJohn 5h spamming`")
        .addFields({name : 'Aliases', value: 'No Aliases'})
        .setColor('RANDOM')


        if(args[0] == 'mute') {
            message.channel.send(mute)
        }

        const unmute = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Unmute a member who is muted \n **Usage:** `.unmute @user`\n**Example:** `.unmute @MadlyJohn`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'unmute') {
            message.channel.send(unmute)
        }

        const prune = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Delete a specifc amount of messages above your message \n **Usage:** `.prune <number>`\n**Example:** `.prune 5`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'prune') {
            message.channel.send(prune)
        }

        const speak = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Change a roles permission to speak in a channel \n **Usage:** `.speak <channel> <role> <f/n/t>`\n**Example:** `.speak #general Noobs f`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'speak') {
            message.channel.send(speak)
        }

        const poll = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Set up a poll \n **Usage:** `.poll <channel> [Question] `\n**Example:** `.poll #general I should quit`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'poll') {
            message.channel.send(poll)
        }

        
        const Giveaway = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Set up a giveaway \n **Usage:** `.giveaway <channel> <time> <winners> [prize] `\n**Example:** `.giveaway #general 5m 5 robux `")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'giveaway') {
            message.channel.send(Giveaway)
        }



        const settings = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Show your current settings setup in the server")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'settings') {
            message.channel.send(settings)
        }




        const role = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Give a member a specfic role \n **Usage:** `.role <member> <role>`\n**Example:** `.role @MadlyJohn Dank memers`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'role') {
            message.channel.send(role)
        }

    
        const disable = new Discord.MessageEmbed()
        .setTitle("❓ Command help")
        .setDescription("Disable a setting \n **Usage:** `.disable <settings>`\n**Example:** `.disable logchannel`")
        .addFields({name : 'Aliases', value: 'No aliases'})
        .setColor('RANDOM')


        if(args[0] == 'disable') {
            message.channel.send(disable)
        }



          


    }
}