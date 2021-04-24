const { MessageEmbed } = require("discord.js");
const qdb = require("quick.db");
const ayarlar = require("../ayarlar.json");
const ms = require('ms');
const moment = require("moment");

exports.run = async (client, message, args) => {
    
if(![(ayarlar.vmutehammer)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  



let kullanici = message.mentions.members.first()  || message.guild.members.cache.get(args[0]);
if(!kullanici) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, bir kullanıcı etiketle.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
if(message.member.roles.highest.position <= kullanici.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('RANDOM').setTimestamp()).then(x => x.delete({timeout: 5000}));
let sebep = args.splice(1).join(" ");
if(!sebep) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Bir sebep belirtmelisin.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('RANDOM').setTimestamp()).then(x => x.delete({timeout: 5000}));

kullanici.voice.setMute(false);  

message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`${kullanici} Kişisinin Mutesi ${message.author}Tarafından __${sebep}__ sebebiyle kaldırıldı.`));
message.react((ayarlar.onayemoji))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vunmute"],
  permLevel: 0
};
exports.help = {
  name: "vunmute",
  description: "vunmute",
  usage: "vunmute"
};
