const Discord = require("discord.js")
const botconfig = require("../bot");
const { description } = require("./creator");

module.exports = {
    name: "kick",
    description: "Kicks a user",
    usage: ".kick",
    accesableby: "Admins",
    aliases: [],
    async execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send("You do not have permission to use that command.");
        } else {
            let memberId = args[0].replace('<@!', '').replace('>', '');
            let member = message.guild.members.cache.get(memberId);
      
            if (member) {
                try {
                    await member.kick();
                    console.log('Kicked!');
                    message.channel.send(`${member}, Kicked!`);
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}