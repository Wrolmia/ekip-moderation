const db = require("quick.db")
const Discord = require("discord.js")
exports.run = function(client, message, args) {

  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setAuthor(message.author.username , message.author.avatarURL({ dyamic: true})).setDescription(`${USER} Geçerli Bir Sebep Girmelisin!`))  
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setAuthor(message.author.username , message.author.avatarURL({ dyamic: true})).setDescription(`${USER} Afk Moduna Başarı İle Geçtin \n Sebep: ${REASON}`))  
  message.member.setNickname(`[AFK] ${message.member.displayName}`).catch(e => message.channel.send(new Discord.MessageEmbed().setColor('RANDOM').setAuthor(message.author.username , message.author.avatarURL({ dyamic: true})).setDescription(`${USER} Bottan üst Yetki Olduğun İçin İsmini Değişemiyorum.`)))
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["afk"],
    permLevel: 0
  };
  exports.help = {
    name: "afk",
    description: "afk",
    usage: "afk"
  };