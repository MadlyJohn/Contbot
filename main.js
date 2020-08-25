const { Client, Collection } = require("discord.js");
const Discord = require("discord.js")
const db = require('quick.db')
const bot = new Discord.Client({
    disableEveryone: true // what does this disable thing do?
  });;
const { token } = require("./config.json");
const hostedBy = (true)
const config = require('./config.json');
bot.config = config;


const fs = require("fs");

bot.commands = new Collection();
bot.aliases = new Collection();

bot.categories = fs.readdirSync("./commands/");
// Require the command and event handler
["command", "event"].forEach((cmdHandler) => {
    require(`./handlers/${cmdHandler}`)(bot);
});


const { GiveawaysManager } = require('discord-giveaways');

bot.giveawaysManager = new GiveawaysManager(bot, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: [],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

bot.on('ready', () => {
    console.log('I am ready');
    bot.user.setActivity(`.help | discord.gg/Dankers`)
});

bot.on("guildMemberAdd", (member) => {

    let msg = db.get(`welmessage_${member.guild.id}`)
    if (!msg) msg = "We are very happy to have you in our server"



    let chx = db.get(`welchannel_${member.guild.id}`);
    
    if(chx === null) {
      return;
    }
  
    let wembed = new Discord.MessageEmbed()
    .setAuthor(member.user.username, member.user.avatarURL())
    .setColor("#ff2050")
    .setThumbnail(member.user.avatarURL())
    .setDescription(`${msg}`)
    .setTimestamp()
    .setFooter(`ID: ${member.user.id}`);

    
    bot.channels.cache.get(chx).send(wembed)

})




bot.login(token);